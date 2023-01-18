import styled from "styled-components";

export const DetailBody = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background: #f5f5f5;
	flex-direction: column;
	padding-bottom: 56px;
`;
export const DetailContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: #f5f5f5;
	width: 100%;
	height: auto;
	padding: 0;

	> div {
		/* max-width: 728px; */
		width: 100%;

		@media only screen and (max-width: 728px) {
			width: 100%;
		}
	}
`;
export const DetailImg = styled.img`
	width: 728px;
	height: 390px;
`;
export const DetailMarketDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 16px 20px;
	gap: 12px;
	background: #ffffff;
	width: 728px;
	height: 217px;
`;
export const DetailMarketInfo = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 688px;
	height: 42px;
`;
export const MarketProfile = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0px;
	gap: 12px;

	width: 160px;
	height: 42px;
`;
export const ProfileImg = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
`;
export const ProfileName = styled.div``;
export const MarketName = styled.div`
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	color: #212121;
`;
export const MarketLocation = styled.div`
	font-weight: 400;
	font-size: 13px;
	line-height: 18px;
	color: #757575;
`;
export const MarketIcon = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	justify-content: center;
	padding: 0px;
	gap: 16px;

	width: 72px;
	height: 46px;
`;
export const FlagStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0px;
	gap: 4px;

	width: 32px;
	height: 46px;
`;
export const IconStyle = styled.div`
	display: flex;
	justify-content: center;
	width: 24px;
	height: 24px;
`;
export const MoreStyle = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 2px;
	width: 24px;
	height: 24px;
`;
export const FlagText = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 400;
	font-size: 12px;
	color: #212121;
`;
export const Line = styled.div`
	width: 100%;
	height: 1px;
	background: #f5f5f5;
`;
export const DetailMarketTitle = styled.div`
	height: auto;
`;
export const MarketTitle = styled.div`
	width: 100%;
	height: 26px;
	font-weight: 500;
	font-size: 18px;
	line-height: 26px;
	color: #212121;
`;
export const RateStyle = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0px;
	gap: 4px;
	margin-top: 5px;
	width: 108px;
	height: 18px;
`;
export const Star = styled.div`
	flex-direction: row;
	width: 80px;
	height: 16px;
`;
export const Number = styled.p`
	flex-direction: row;
	font-weight: 400;
	font-size: 11px;
	line-height: 18px;
	color: #424242;
`;
export const DiscountStyle = styled.p`
	display: flex;
	flex-direction: row;
	gap: 4px;
	margin-top: 17px;
`;
export const Discount = styled.p`
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
	color: #ed2a2a;
`;
export const Price = styled.p`
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	text-decoration-line: line-through;
	color: #9e9e9e;
`;
export const FinalPrice = styled.p`
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
	color: #212121;
`;
export const DetailTabDiv = styled.div`
	height: auto;
`;
export const TabButtonStyle = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 0px;
	width: 100%;
	height: 50px;
	background: #ffffff;
	border-bottom: 1px solid #eeeeee;
`;
export const DetailTabInfo = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 8px 20px;
	gap: 4px;
	width: ${props => props.width || "33.3%"};
	height: 50px;
	border-bottom: solid
		${(props) => (props._bottomsize || '2px')};
		${(props) => (props.infocolor ? "#0B806F" : "#BDBDBD")};
	/* border-bottom: 2px solid #0B806F; */

	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
	color: ${(props) => (props.infocolor ? "#0B806F" : "#BDBDBD")};
	/* color: #0B806F; */
`;
export const DetailTabReview = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 8px 20px;
	gap: 4px;
	border-bottom: 			solid 
	${(props) => (props._bottomsize || '2px')};
	${props => (props.reviewcolor ? "#0B806F" : "#BDBDBD")};
	width: ${(props) => props.width || "33.3%"};
	height: 50px;

	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
	color: ${(props) => (props.reviewcolor ? "#0B806F" : "#BDBDBD")};
	/* color: #BDBDBD; */
`;
export const TabContentStyle = styled.div``;

export const ButtonStyleNew = styled.div`
 position: fixed;
    display: flex;
    flex-direction: column;
    width: 728px;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    gap: ${props => props._gap || 8}px;
    padding: ${props => props._padding || '0px'};
    @media only screen and (max-width: 728px) { 
        width: 100%;
  }
`;
export const ButtonStyle = styled.div`
	position: fixed;
	bottom: 0;
	justify-items: center;
	width: 100%;
	height: 70px;
	@media screen and (max-width: 728px) {
		width: 100%;
	}
`;
export const DetailButtonDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 4px 20px;
	gap: 8px;
	/* width: 100%; */
	max-width: 728px;
	height: 70px;
	background: #ffffff;
	box-shadow: 0px -3px 16px rgba(0, 0, 0, 0.08);
`;
export const DetailButtonStyle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: ${(props) => props.width || "100%"};

	height: ${(props) => props.height || "48px"};
	bottom: 0;
	background: #0b806f;
	border-radius: 4px;

	font-weight: 700;
	font-size: ${(props) => props.size || "18px"};
	line-height: 26px;
	color: #ffffff;
`;

export const TabBody = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 728px;
	height: auto;
	gap: 1px;
	background: #ffffff;
`;
export const TabInfoType = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 24px 20px;
	gap: 12px;
	width: 100%;
	height: 214px;
`;
export const TypeTextStyle = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: 0px;
	gap: 24px;
	width: 100%;
	height: 20px;
`;
export const TypeLabel = styled.p`
	width: 15%;
	height: 20px;
	font-weight: 500;
	font-size: 14px;
	line-height: 20px;
	color: #212121;
	@media screen and (max-width:637px){
		width: 20%;
	}
	@media screen and (max-width:435px){
		width: 30%;
	}
`;
export const TypeLabelInfo = styled.p`
	width: auto;
	height: 20px;
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	color: #212121;
`;
export const CouponTextStyle = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: 0px;
	gap: 24px;

	width: 688px;
	height: 38px;
`;
export const CouponLabel = styled.p`
	width: 89px;
	height: 20px;
	font-weight: 500;
	font-size: 14px;
	line-height: 20px;
	color: #212121;
`;
export const CouponLabelInfoDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;
	width: 575px;
	height: 38px;
`;
export const CouponLabelInfo1 = styled.p`
	width: 575px;
	height: 20px;
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	color: #212121;
`;
export const CouponLabelInfo2 = styled.p`
	width: 575px;
	height: 20px;
	font-weight: 400;
	font-size: 12px;
	line-height: 18px;
	color: #757575;
`;
export const TabInfoContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 24px 20px;
	gap: 12px;
	width: 100%;
`;
export const TabInfoContentTitle = styled.div`
	font-weight: 700;
	font-size: 16px;
	line-height: 24px;
	color: #212121;
`;
export const TabInfoContentText = styled.div`
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	color: #212121;
	padding: 0;
	gap: 0;
`;
export const TabReviewType = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 16px 20px;
	width: 100%;
	height: auto;
	background: #ffffff;
`;
export const ReviewRateStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 20px 0px;
	gap: 4px;
	width: 688px;
	height: 102px;
`;
export const ReviewListStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;
	width: 100%;
	height: auto;
`;
export const ReviewMenu = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 0px;
	gap: 12px;
	width: 688px;
	height: 20px;
	margin-bottom: 12px;
`;
export const MenuQuantity = styled.p`
	font-weight: 400;
	font-size: 15px;
	line-height: 20px;
	color: #212121;
`;
export const MenuFilterDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 0px;
	gap: 4px;
	width: 61px;
	height: 20px;
`;
export const MenuFilterText = styled.div`
	font-weight: 400;
	font-size: 13px;
	line-height: 18px;
	color: #212121;
`;
export const MenuFilterIcon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 20px;
	height: 20px;
`;
export const ReviewRateDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 0px;
	gap: 4px;

	width: 688px;
	height: 28px;
`;
export const ReviewStar = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 0px;
	gap: 4px;

	width: 156px;
	height: 28px;
`;
export const ReviewNum = styled.div`
	font-weight: 500;
	font-size: 20px;
	line-height: 30px;
	text-align: center;
`;
export const ReviewContentDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 20px 0px;
	gap: 16px;
	width: 688px;
	height: auto;
`;
export const ReviewContentProfile = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 0px;
	gap: 8px;

	width: 688px;
	height: 42px;
`;
export const ReviewProfileStyle = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 8px;
`;
export const ReportText = styled.p`
	padding-top: 0;
	font-weight: 400;
	font-size: 12px;
	color: #bdbdbd;
`;
export const UploadImg = styled.img`
	width: 100%;
	height: auto;
	border-radius: 4px;
`;
export const Comments = styled.p`
	width: 100%;
	height: auto;
	font-weight: 400;
	font-size: 15px;
	line-height: 20px;
	color: #424242;
`;
export const ReviewLikeStyle = styled.div`
	width: 109px;
	height: 34px;
`;
export const ReviewLikeFrame = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 7px 11px;
	gap: 5px;
	width: 109px;
	height: 34px;
	border: 1px solid ${(props) => (props.color ? "#0B806F" : "#F5F5F5")};
	/* border: 1px solid #0B806F; */
	border-radius: 99px;
`;
export const ReviewLikeButton = styled.div`
	width: 17px;
	height: 17px;
`;
export const ReviewLikeText = styled.p`
	font-weight: 400;
	font-size: 13px;
	line-height: 18px;
	color: ${(props) => (props.color ? "#0B806F" : "#757575")};
`;
export const ReviewProfileImg = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
`;
export const ProfileDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;
export const ProfileTextDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 0px;
	gap: 8px;
	width: 109px;
	height: 24px;
`;
export const ReviewId = styled.p`
	font-weight: 600;
	font-size: 16px;
	color: #212121;
`;
export const ReviewDate = styled.p`
	font-weight: 400;
	font-size: 12px;
	line-height: 18px;
	color: #9e9e9e;
`;
export const MarketReviewDiv = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: 0px;
	gap: 16px;
	width: 100%;
	height: auto;
`;
export const MarketCommentsStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 16px;
	gap: 16px;
	width: 100%;
	height: auto;
	background: #f5f5f5;
	border-radius: 8px;
`;
export const MarketIdDiv = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0px;
	gap: 8px;
	width: 100px;
	height: 24px;
`;
export const MarketId = styled.div`
	font-weight: 600;
	font-size: 16px;
	color: #212121;
`;
export const MarketDate = styled.div`
	font-weight: 400;
	font-size: 12px;
	color: #9e9e9e;
`;
export const MarketComments = styled.div`
	font-weight: 400;
	font-size: 15px;
	color: #424242;
`;
export const OrderToggleBox = styled.div`
	position: absolute;
	bottom: 0;
	padding: ${(props) => props._padding || "16px 20px"};
	margin-bottom: 70px;
	border-radius: ${(props) => props._br || "20px 20px 0px 0px"};
	gap: ${(props) => props._gap || "16px"};
	width: ${(props) => props._width || "100%"};
	height: ${(props) => props._height || "158px"};
	background: ${(props) => props._bg || "#FFFFFF"};
	box-shadow: 0px -3px 16px rgba(0, 0, 0, 0.08);
	max-width: 728px;
	@media only screen and (max-width: 728px) {
		width: 100%;
	}
`;
