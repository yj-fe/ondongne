import React, { useEffect, useState } from "react";
// import CoachModalSlide from "components/layout/PopUp/CoachModalSlide";
import { useCookies } from "react-cookie";
import moment from "moment";
import PopUp from "components/layout/PopUp/PopUp";
import { CursorDiv } from "components/Common/LayoutPageStyle";
import { useContext } from "react";
import StepOptions from "components/shepherd/steps";
// import { ShepherdTour, ShepherdTourContext } from "react-shepherd";
import "components/shepherd/styles.css";

const COOKIE_COACH_KEY = "coachNeverWatch";
const COOKIE_POPUP_KEY = "popupNeverWatch";
const COOKIE_GUIDE_KEY = "guideNeverWatch";

// shepherd
const tourOptions = {
    defaultStepOptions: {
        classes: "shepherd-theme-custom",
        cancelIcon: {
            enabled: true,
        },
    },
    classPrefix: true,
    useModalOverlay: true,
};

// function Button() {
//     const tour = useContext(ShepherdTourContext);
//     // 바로시작버튼
//     return tour.start();
// }

function MainCoachmark() {
    const [cookiesCoach, setCookieCoach] = useCookies([COOKIE_COACH_KEY]);
    const [cookiesPopup, setCookiePopup] = useCookies([COOKIE_POPUP_KEY]);
    const [cookiesGuide, setCookieGuide] = useCookies([COOKIE_GUIDE_KEY]);

    const [depth01, setDepth01] = useState(false);
    const [depth02, setDepth02] = useState(false);
    const [depth03, setDepth03] = useState(false);

    const { newSteps } = StepOptions(
        () => eventhandler(365, 3),
        () => setDepth03(false)
    );

    // 다시보지않기 이벤트
    const eventhandler = (day, type) => {
        const decade = moment();
        decade.add(day, "d");

        if (type === 1) {
            return setCookieCoach(COOKIE_COACH_KEY, "true", {
                path: "/",
                expires: decade.toDate(),
            });
        }

        if (type === 2) {
            return setCookiePopup(COOKIE_POPUP_KEY, "true", {
                path: "/",
                expires: decade.toDate(),
            });
        }

        if (type === 3) {
            return setCookieGuide(COOKIE_GUIDE_KEY, "true", {
                path: "/",
                expires: decade.toDate(),
            });
        }
    };

    useEffect(() => {
        // if (depth01 || depth02 || depth03) {
        //     document.body.style.overflow = "hidden";
        //     window.scrollTo(0, 0);
        // } else {
        //     document.body.style.overflow = "unset";
        // }
        if (depth02) {
            document.body.style.overflow = "hidden";
            window.scrollTo(0, 0);
        } else {
            document.body.style.overflow = "unset";
        }
    }, [depth01, depth02, depth03]);

    useEffect(() => {
        setDepth01(!cookiesCoach[COOKIE_COACH_KEY]);
        setDepth02(!cookiesPopup[COOKIE_POPUP_KEY]);
        setDepth03(!cookiesGuide[COOKIE_GUIDE_KEY]);
    }, [cookiesCoach, cookiesPopup, cookiesGuide]);

    return (
        <CursorDiv>
            {/* {depth01 && (
                <CoachModalSlide
                    closeModal={() => setDepth01(false)}
                    neverWatch={() => eventhandler(365, 1)}
                />
            )}
            {!depth01 && depth02 && (
                <PopUp
                    closeModal={() => setDepth02(false)}
                    neverWatch={() => eventhandler(7, 2)}
                />
            )}
            {!depth01 && !depth02 && depth03 && (
                <ShepherdTour steps={newSteps} tourOptions={tourOptions}>
                    <Button />
                </ShepherdTour>
            )} */}
            {depth02 && (
                <PopUp
                    closeModal={() => setDepth02(false)}
                    neverWatch={() => eventhandler(7, 2)}
                />
            )}
        </CursorDiv>
    );
}

export default MainCoachmark;
