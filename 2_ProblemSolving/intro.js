/*
 [Algoritm이란?]
 - 문제 해결 위해 수행해야 하는 일련의 과정 및 단계

 [문제 해결을 위해 어떻게 접근?]
 1. 문제 해결을 위한 계획 수립
 2. 일반적 문제 해결 패턴 파악

 [문제 해결 방법]
 1. 문제 이해
 2. 구체적인 예제
    - 여러가지 예제의 경우 문제 해결에 더 도움이 됨
    - 해결책이 제대로 동작하는지 확인 할 예제가 될 수 있음
 3. 세분화
    - 문제에 대한 단계들을 실제로 수행하면서 작성
 4. 해결 및 단순화
 5. 복습 및 재구성


 */

/*  

 [STEP01- 문제의 이해]
1. 자신만의 방식으로 바꿔서 이해 가능한가?
2. 그 문제의 입력값(input)이 무엇인가? (입력값의 형태 등등)
3. 문제 해결을 위한 결과(output)는 무엇인가? ( 출력 값의 형태 등등 )
4. 입력값이 출력값을 결정할 수 있는가? (문제 해결을 위한 충분한 정보를 알고,갖고 있는가?)
5. 문제의 중요한 부분이 무엇인지 아는가? 해당 부분을 어떻게 명칭하는가?

[STEP2 - 구체적인 예시]
1. 간단한 예제로 시작 해서 복잡한 예제로
2. 빈 입력값 -> 유효하지 않는 입력값이 주어진 상황 유용
3. 유요하지 않은 입력값


[STEP3 - 문제의 세분화]
1. 기본적 구성요소 작성 
  - 감이 잘 잡히지 않거나 이해되지 않는 부분들을 파악하는 데 도움

[STEP4 - 해결 / 단순화]
1. 이전 일련의 과정을 통해 문제 해결
2. 당장 해결하지 못한다면 단순화 부터 
    -> 다른 문제 해결을 위해 시간이 많이 소요되는 부분을 배제하여 단순화 시킴
    -> 문제를 단순화 하는 과정(동작 방식의 이해)에서 문제의 어려운 부분을 파악하면서 다시 통합

[STEP5 - 복습(리팩토링) 및 재구성]
1. 결과 확인했는가?
2. 결과를 다른 방식으로 도출 할 수 있는가?
3. 한눈에 알아보고 이해할 수 있는가?
4. 해결책을 다른 문제에 적용할 수 있는가?
5. 해결책의 성능을 향상할 수 있는가? (해결책을 도출하면서 가장 먼저 고려할 부분)
6. 다른방식으로 리팩토링 할 방법을 고려할 수 있는 가?
7. 다른 사람들은 어떻게 해결했는가? (새로운 접근 방식과 다른 해결책을 알 수 있음)

*/

// 단순 예시 -> 구체적 예시
console.log(charCount('aaaA')); // {a:4}
console.log(charCount('Hi~ Hello World! 1223'));
/*
{
  h: 2,
  i: 1,
  e: 1,
  l: 3,
  o: 2,
  w: 1,
  r: 1,
  d: 1,
  1: 1,
  2: 2,
  3: 1
}
*/

//문제 세분화
/* 
const charCount = (str) => {
  // 실행 과정
  // 리턴 : 객체, 각각의 키는 소문자, 값은 숫자, 특수문자 공백 제외
}
*/

/*

(STEP3 exP 문자열을 받아 각각의 문자의 갯수를 출력하는 함수를 작성하시오 (단, 대소문자 구분 없음)
function charCount (str)  {
  // 시작 => 객체 생성
  // 과정 => string 문자열 순회하며 각각의 문자 처리
  // 문자가 숫자/문자 && 객체 안에 없을 경우 => object의 key로 설정 후 +1
  // 문자가 숫자/문자 && 객체 안에 있을 경우 => 해당 숫자/문자의 key로 값을 찾아 +1
  // 문자나 숫자가 아닌 공백,마침표 등등 일 경우 카운팅 하지 않는다
  // 끝 => 객체를 반환한다
};
*/

function isCharNumeric(char) {
  const code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0 to 9)
    !(code > 64 && code < 91) && // upper (A to Z)
    !(code > 96 && code < 123) // lower (a to z)
  ) {
    return false;
  }
  return true;
}

function charCount(str) {
  // 시작 => 객체 생성
  const result = {};
  // 과정 => string 문자열 순회하며 각각의 문자 처리
  for (const char of str.toLowerCase()) {
    // 문자나 숫자가 아닌 공백,마침표 등등 일 경우 카운팅 하지 않고 다음 문자열 체크
    if (!isCharNumeric(char)) continue;

    // 문자가 숫자/문자 && 객체 안에 없을 경우 => object의 key로 설정 후 +1
    //문자가 숫자/문자 && 객체 안에 있을 경우 => 해당 숫자/문자의 key로 값을 찾아 +1
    result[char] = ++result[char] || 1;
  }
  // 끝 => 객체를 반환한다
  return result;
}

console.log(charCount('aaaaa~~~~bbb**(@@ccccccccccc!!!!&&&    dddddd')); //{ a: 5, b: 3, c: 11, d: 6 }
