// const validityMessage = {
//     badInput: "[커스텀 메세지] 잘못된 입력입니다.",
//     patternMismatch: "[커스텀 메세지] 패턴에 맞게 입력하세요",
//     rangeOverflow: "[커스텀 메세지] 범위를 초과하였습니다",
//     rangeUnderflow: "[커스텀 메세지] 범위에 미달하였습니다",
//     stepMismatch: "[커스텀 메세지] 간격에 맞게 입력하세요",
//     tooLong: "[커스텀 메세지] 최대 글자 미만으로 입력하세요",
//     tooShort: "[커스텀 메세지] 최소 글자 미만으로 입력하세요",
//     typeMismatch: "[커스텀 메세지] 형식에 맞게 입력하세요",
//     valueMissing: "[커스텀 메세지] 이 필드를 반드시 입력하세요",
// };

// const getMessage = (validity) => {
//     for (const key in validity) {
//         if (validity[key]) return validityMessage[key];
//     }
// };

const onRequiredValidationEvent = () => {
    // if (!target.validity.customError) {
    //     target.setCustomValidity(getMessage(target.validity));
    // }
};

export default onRequiredValidationEvent;
