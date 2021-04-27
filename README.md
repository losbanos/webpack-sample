#### commit log
**9420be41bcf5275d26993b65d534e5751b5558de**  
내용: webpack 다운그레이드 5 -> 4    

`"webpack": "^5.35.1"  
"webpack-dev-server": "^3.11.2"  
`  
위 webpack 과 webpack-dev-server 버전에서   
웹팩 5는 file change 시 브라우저 리로드가 되지 않는 이슈 발생
- 웹팩의 버전을 5에서 4로 다운 그레이드시 문제 해결
- 혹은 webpack-dev-server 버전을 업그레이드시 문제 해결 가능(npm i --save-dev webpack-dev-server@next - 베타버전 2021.04.28)  
- webpack-dev-server 베타 버전은 현재 webpack official doc 에 명시된 몇몇 option 이 제대로 동작하지 않거나, migration 방법 혹은 추가 해결방법 확인까지  필요하여 webpack 버전을 낮추는 방법 선택