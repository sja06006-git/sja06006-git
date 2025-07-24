// 등차수열 또는 등비수열 common
// 마지막 원소 다음으로 올 숫자는?

function solution(common) {
    let lastIndex = common.length - 1
    let add = common[lastIndex] - common[lastIndex - 1];
    let multiple = common[lastIndex] / common[lastIndex - 1];

    return common[lastIndex] / common[lastIndex - 1] === common[lastIndex - 1] / common[lastIndex - 2] ? common[lastIndex] * multiple : common[lastIndex] + add;
}

// 더 줄여본 버전

function solution(common) {
    let lastIndex = common.length - 1;
    let condition = common[lastIndex] - common[lastIndex - 1] === common[lastIndex - 1] - common[lastIndex - 2];

    return condition ? common[lastIndex] + common[1] - common[0] : common[lastIndex] * common[1] / common[0];
}