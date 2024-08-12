window.onload = function() {
    // 현재 URL의 쿼리 문자열을 가져옵니다.
    const queryString = window.location.search;

    // 쿼리 문자열이 비어 있지 않은 경우에만 처리합니다.
    if (queryString) {
        // 쿼리 문자열에서 '?'를 제거합니다.
        const url = queryString.substring(1);

        // a 태그를 생성합니다.
        const aTag = document.createElement('a');
        aTag.href = url;
        aTag.innerText = url;
        aTag.rel = 'noreferrer noopener';

        // 생성한 a 태그를 body에 추가합니다.
        document.body.appendChild(aTag);

        // a 태그를 자동으로 클릭합니다.
        aTag.click();
    }
};