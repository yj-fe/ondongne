import React, { useState } from "react";
import BusinessAgreementModal from "./BusinessAgreementModal";
import BizSignupModal from "./BizSignupModal";

const BizSignupForm = ({ close }) => {
    const [coachmark, setCoachmark] = useState(true);
    const [agreementModal, setAgreementModal] = useState(false);

    return (
        <>
            {coachmark && (
                <BizSignupModal
                    close={close}
                    next={() => {
                        setCoachmark(false);
                        setAgreementModal(true);
                    }}
                />
            )}
            {agreementModal && <BusinessAgreementModal closeModel={close} />}
        </>
    );
};

export default BizSignupForm;
