function solution(common) {
    let lastIndex = common.length - 1;
    let condition = common[lastIndex] - common[lastIndex - 1] === common[lastIndex - 1] - common[lastIndex - 2];

    return condition ? common[lastIndex] + common[1] - common[0] : common[lastIndex] * common[1] / common[0];
}