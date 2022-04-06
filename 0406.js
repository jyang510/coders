https://programmers.co.kr/learn/courses/30/lessons/49191

// 스스로의 힘으로 약 2시간 가량 도전해봤지만 결론적으로 그럴듯한 로직을 구현하지 못하여 다른 분의 코드를 참고해서 적었다.
// 그래프 문제라고 적혀있는 레벨 3 문제인데 이 분의 방식은 그래프 방식으로 풀었다기보단 
// [모든 선수와의 대결기록을 유추할 수 있는 경우]에 포커스를 두시고 승리, 패배한 가짓수를 확인해서 푸셨다
// 이 문제를 그래프 (정점, 간선)을 사용한 풀이 방식으로 푼다는 게 정확히 감이 잘 안 잡힌다. BFS, DFS를 하며 많이 익혔다고 생각했는데 흠..ㅋㅋㅋㅋ

const solution = (n, results) => {
	const rangeN = [...Array(n).keys()].map((e) => e + 1);
	// key: winner, value : Set([losers])
	const wins = {};
	// key: loser, value : Set([winners])
	const loses = {};
	rangeN.map((key) => {
		wins[key] = new Set([]);
		loses[key] = new Set([]);
	});

	// 승패 결과 저장
	results.map((val) => {
		const [winner, loser] = val;
		wins[winner].add(loser);
		loses[loser].add(winner);
	});

	rangeN.map((i) => {
		// i 선수를 이긴 선수(losers[i])는 i 선수에게 패한 선수들(wins[i])도 이김
		for (const winner of [...loses[i]]) {
			if (!wins[winner]) continue;
			for (const loser of wins[i]) {
				wins[winner].add(loser);
			}
		}
		// i 선수에게 패한 선수는 i선수를 이긴 선수들에게도 패함
		for (const loser of [...wins[i]]) {
			if (!loses[loser]) continue;
			for (const winner of loses[i]) {
				loses[loser].add(winner);
			}
		}
	});

	return rangeN.reduce(
		(ans, i) => (wins[i].size + loses[i].size === n - 1 ? ans + 1 : ans),
		0
	);
};
