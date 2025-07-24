function solution(common) {
    var answer = 0;
    let lastIndex = common.length - 1
    let add = common[lastIndex] - common[lastIndex - 1];
    let multiple = common[lastIndex] / common[lastIndex - 1];

    return common[lastIndex] / common[lastIndex - 1] === common[lastIndex - 1] / common[lastIndex - 2] ? answer = common[lastIndex] * multiple : answer = common[lastIndex] + add;
}