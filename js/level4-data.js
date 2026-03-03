const LEVEL4_DATA = {
    id: 4,
    title: "メッセージと場所別攻略",
    icon: "📲",
    description: "LINE攻略、デートの誘い方、場所別のアプローチ法を学ぶ",
    modules: [
        {
            id: 401,
            title: "メッセージ編 - LINEテクニック",
            duration: "15分",
            content: `
                <h2>初回メッセージの鉄則</h2>
                <div class="info-box tip">
                    <div class="info-box-title">交換直後（その日のうち）に送る</div>
                    <p>「今日は話してくれてありがとう！〇〇です！△△の話めっちゃ楽しかった」</p>
                    <p><strong>ポイント：</strong></p>
                    <ul>
                        <li>名前を名乗る（相手は忘れてる可能性）</li>
                        <li>会話の具体的な内容に触れる（特別感）</li>
                        <li>長文にしない（3行以内）</li>
                    </ul>
                </div>

                <h2>メッセージのペース配分</h2>
                <table>
                    <thead><tr><th>期間</th><th>やること</th><th>備考</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Day 1-2</strong></td><td>軽いやりとり</td><td>1日3-5往復</td></tr>
                        <tr><td><strong>Day 3-5</strong></td><td>デートの約束を取り付ける</td><td>ここが目標</td></tr>
                        <tr><td><strong>Day 5-7</strong></td><td>デート当日</td><td>-</td></tr>
                    </tbody>
                </table>

                <div class="info-box warning">
                    <div class="info-box-title">重要な注意点</div>
                    <p>LINEはデートの約束手段。目的にしない。</p>
                    <p>長期間ダラダラやりとりすると熱が冷める。</p>
                </div>

                <h2>デートの誘い方 - 二択提示法</h2>
                <div class="info-box success">
                    <div class="info-box-title">鉄板パターン</div>
                    <p>「来週の土曜か日曜、あの〇〇のお店行かない？」</p>
                    <p><strong>ポイント：</strong></p>
                    <ul>
                        <li>具体的な日程を2つ提示（「いつか行こう」はNG）</li>
                        <li>会話で出た店・場所をフックにする</li>
                        <li>「行く/行かない」ではなく「土曜/日曜」の選択にする</li>
                    </ul>
                </div>
            `,
            quiz: [
                { id: "q401_1", type: "choice", question: "初回メッセージで最も重要なことは？", options: ["長文で自己紹介する", "会話の具体的な内容に触れて3行以内で送る", "スタンプだけ送る", "次の日に送る"], answer: 1, explanation: "初回メッセージは当日中に、会話の具体的内容に触れつつ3行以内で簡潔に送ることが大切です。" },
                { id: "q401_2", type: "choice", question: "デートの約束は何日目までに取り付けるべき？", options: ["当日中", "Day 3-5", "2週間後", "1ヶ月後"], answer: 1, explanation: "Day 3-5が目標です。長期間ダラダラやりとりすると熱が冷めてしまいます。" },
                { id: "q401_3", type: "choice", question: "二択提示法でNGな誘い方は？", options: ["土曜か日曜どっちがいい？", "来週の水曜か木曜は？", "いつか行こうよ", "今週末か来週末は？"], answer: 2, explanation: "「いつか行こう」は具体性がなく実現しません。必ず具体的な日程を2つ提示しましょう。" },
                { id: "q401_4", type: "choice", question: "LINEの役割として正しいのは？", options: ["関係を深める主な場所", "デートの約束手段", "自分をアピールする場", "毎日の連絡ツール"], answer: 1, explanation: "LINEはデートの約束を取り付けるための手段であり、目的にしてはいけません。" },
                { id: "q401_5", type: "fill", question: "デートの誘い方で具体的な日程を2つ提示する手法を何と呼びますか？（漢字2文字＋カタカナ3文字＋漢字1文字）", answer: "二択提示法", explanation: "二択提示法は「行く/行かない」ではなく「土曜/日曜」のように選択肢を2つ提示する手法です。" }
            ]
        },
        {
            id: 402,
            title: "場所別攻略法",
            duration: "15分",
            content: `
                <h2>場所別攻略マトリクス</h2>
                <table>
                    <thead><tr><th>場所</th><th>難易度</th><th>メリット</th><th>アプローチ法</th></tr></thead>
                    <tbody>
                        <tr><td><strong>カフェ</strong></td><td>低</td><td>座っていて会話しやすい</td><td>隣の席から自然に話しかける</td></tr>
                        <tr><td><strong>書店</strong></td><td>低</td><td>共通の話題（本）がある</td><td>「その本面白いですよ」から</td></tr>
                        <tr><td><strong>ジム</strong></td><td>中</td><td>定期的に会える</td><td>顔見知りになってから声かけ</td></tr>
                        <tr><td><strong>イベント</strong></td><td>低</td><td>共通の興味がある</td><td>「これ初めてですか？」から</td></tr>
                        <tr><td><strong>街中（昼）</strong></td><td>高</td><td>出会いの数が多い</td><td>ストレート型オープナー</td></tr>
                        <tr><td><strong>バー</strong></td><td>中</td><td>お酒で打ち解けやすい</td><td>カウンターで隣になったら</td></tr>
                    </tbody>
                </table>

                <h2>場所別のポイント</h2>
                <h3>カフェ・書店（難易度：低）</h3>
                <div class="info-box success">
                    <div class="info-box-title">メリット</div>
                    <p>座っているため会話しやすく、共通の話題を見つけやすい。初心者にはカフェや書店から始めることを推奨。</p>
                </div>

                <h3>ジム（難易度：中）</h3>
                <div class="info-box tip">
                    <div class="info-box-title">ポイント</div>
                    <p>いきなり声をかけるのではなく、まず何回か会って顔見知りになることが重要。「トレーニング中は邪魔しない」という配慮も大切。</p>
                </div>

                <h3>街中（難易度：高）</h3>
                <div class="info-box warning">
                    <div class="info-box-title">注意</div>
                    <p>最も難易度が高いが、出会いの数は最も多い。ストレート型オープナーで堂々と声をかける。相手が急いでいない昼間の時間帯を選ぶ。</p>
                </div>

                <h3>バー（難易度：中）</h3>
                <div class="info-box tip">
                    <div class="info-box-title">ポイント</div>
                    <p>カウンター席で隣になった時が自然なきっかけ。ただし、酔っている相手には声をかけない倫理規定を厳守。</p>
                </div>
            `,
            quiz: [
                { id: "q402_1", type: "choice", question: "初心者に最もおすすめの場所は？", options: ["街中", "バー", "カフェ・書店", "クラブ"], answer: 2, explanation: "カフェ・書店は難易度が低く、座っていて会話しやすいため初心者におすすめです。" },
                { id: "q402_2", type: "choice", question: "ジムでのアプローチで重要なことは？", options: ["初日から声をかける", "顔見知りになってから声かけ", "トレーニング中に話しかける", "連絡先をすぐ聞く"], answer: 1, explanation: "ジムでは何回か会って顔見知りになってから声をかけることが重要です。" },
                { id: "q402_3", type: "choice", question: "街中での声かけで適切なオープナーは？", options: ["シチュエーション型", "ストレート型", "観察型", "どれでもいい"], answer: 1, explanation: "街中では共通の話題がないため、ストレート型オープナーで堂々と意図を伝えるのが適切です。" },
                { id: "q402_4", type: "choice", question: "バーでの声かけで最も自然なきっかけは？", options: ["テーブル席で隣の客に話しかける", "カウンター席で隣になった時", "店員を介して紹介してもらう", "入口で待ち構える"], answer: 1, explanation: "カウンター席で自然に隣になった時が最も自然なきっかけです。" },
                { id: "q402_5", type: "fill", question: "出会いの数は最も多いが難易度も最も高い場所はどこですか？（漢字2文字）", answer: "街中", explanation: "街中（昼）は出会いの数が最も多いですが、共通の話題がなく難易度が高い場所です。" }
            ]
        }
    ]
};
