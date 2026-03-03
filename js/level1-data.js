const LEVEL1_DATA = {
    id: 1,
    title: "マインドセットと準備",
    icon: "🧠",
    description: "内面の準備と外見の磨き方を学ぶ",
    modules: [
        {
            id: 101,
            title: "マインドセット",
            duration: "15分",
            content: `
                <h2>ナンパの再定義</h2>
                <p>まず「ナンパ」という言葉の持つイメージを再定義しましょう。</p>
                <table>
                    <thead><tr><th>よくある誤解</th><th>本質</th></tr></thead>
                    <tbody>
                        <tr><td>「チャラい行為」</td><td>見知らぬ人と関係を築く技術</td></tr>
                        <tr><td>「顔がよくないと無理」</td><td>コミュニケーション力が9割</td></tr>
                        <tr><td>「数打ちゃ当たる」</td><td>質と誠実さが成果を決める</td></tr>
                        <tr><td>「テクニックがすべて」</td><td>人間的魅力が土台</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">核心メッセージ</div>
                    <p>「ナンパとは、"初対面の相手と信頼関係を最速で構築する技術"である。これはビジネスでも、人生でも、最強のポータブルスキルだ。」</p>
                </div>

                <h2>3つのメンタルブロックを壊す</h2>
                <table>
                    <thead><tr><th>ブロック</th><th>思い込み</th><th>リフレーミング</th></tr></thead>
                    <tbody>
                        <tr><td><strong>拒絶恐怖</strong></td><td>断られたら恥ずかしい</td><td>断られても5秒で忘れられる。相手も自分も傷つかない</td></tr>
                        <tr><td><strong>自己否定</strong></td><td>自分なんかが声かけても...</td><td>相手はあなたの「外見スペック」ではなく「雰囲気」に反応する</td></tr>
                        <tr><td><strong>完璧主義</strong></td><td>完璧なセリフを用意しないと...</td><td>不完全な方が人間味があって好感度が高い</td></tr>
                    </tbody>
                </table>

                <div class="info-box success">
                    <div class="info-box-title">最強のマインドセット</div>
                    <p>「断られることは失敗ではない。声をかけなかったことだけが、唯一の失敗。」</p>
                    <p>「相手の時間を奪うのではなく、相手の日常に小さなサプライズを届ける。」</p>
                </div>
            `,
            quiz: [
                { id: "q101_1", type: "choice", question: "ナンパの本質として最も適切な定義は？", options: ["数打ちゃ当たる行為", "初対面の相手と信頼関係を最速で構築する技術", "外見が全ての世界", "テクニックの応酬"], answer: 1, explanation: "ナンパの本質は「初対面の相手と信頼関係を最速で構築する技術」であり、ビジネスにも転用できるポータブルスキルです。" },
                { id: "q101_2", type: "choice", question: "拒絶恐怖を克服するリフレーミングとして正しいのは？", options: ["断られたら相手を恨む", "断られても5秒で忘れられる", "断られないように粘る", "断られそうな人には声をかけない"], answer: 1, explanation: "断られても相手も自分も5秒で忘れるものです。深刻に捉える必要はありません。" },
                { id: "q101_3", type: "choice", question: "ナンパで成果を出すために最も重要なのは？", options: ["外見の良さ", "完璧なセリフ", "コミュニケーション力", "高い年収"], answer: 2, explanation: "ナンパの成果を決めるのはコミュニケーション力が9割です。外見やスペックより重要です。" },
                { id: "q101_4", type: "choice", question: "「唯一の失敗」とされるのは何ですか？", options: ["断られること", "うまく話せないこと", "声をかけなかったこと", "連絡先を聞けなかったこと"], answer: 2, explanation: "断られることは失敗ではなく、声をかけなかったことだけが唯一の失敗です。" },
                { id: "q101_5", type: "fill", question: "相手は外見スペックではなく何に反応しますか？（漢字2文字）", answer: "雰囲気", explanation: "相手が反応するのは外見のスペックではなく「雰囲気」です。自信と誠実さが伝わる雰囲気が大切です。" }
            ]
        },
        {
            id: 102,
            title: "準備編 - 自分磨き",
            duration: "15分",
            content: `
                <h2>清潔感チェックリスト（非交渉事項）</h2>
                <p>声をかける前に勝負は決まっています。以下の5大原則は<strong>最低限の前提条件</strong>です。</p>
                <div class="info-box danger">
                    <div class="info-box-title">最低限の5大原則</div>
                    <ul>
                        <li><strong>髪型</strong> -- 美容院で整える（床屋ではなく美容院）</li>
                        <li><strong>肌</strong> -- スキンケア習慣（洗顔・化粧水・日焼け止め）</li>
                        <li><strong>歯</strong> -- ホワイトニング＋口臭ケア</li>
                        <li><strong>服装</strong> -- サイズ感が命（ユニクロでもサイズが合えばOK）</li>
                        <li><strong>香り</strong> -- 柔軟剤＋ほのかな香水（つけすぎ厳禁）</li>
                    </ul>
                </div>

                <h2>ファッションの方程式</h2>
                <div class="info-box tip">
                    <div class="info-box-title">初心者向け鉄板コーデ</div>
                    <ul>
                        <li><strong>トップス</strong>：無地・ジャストサイズ（白/黒/ネイビー）</li>
                        <li><strong>ボトムス</strong>：スキニー or テーパード（黒/濃紺）</li>
                        <li><strong>シューズ</strong>：革靴 or 白スニーカー（きれいめ）</li>
                        <li><strong>小物</strong>：腕時計 + シンプルバッグ（清潔感の仕上げ）</li>
                    </ul>
                    <p>原則：「シンプル x サイズ感 x 清潔感」、迷ったら全身3色以内に収める</p>
                </div>

                <h2>自分磨きの投資対効果</h2>
                <table>
                    <thead><tr><th>投資項目</th><th>コスト</th><th>効果</th><th>優先度</th></tr></thead>
                    <tbody>
                        <tr><td>美容院（月1回）</td><td>5,000円/月</td><td>非常に高い</td><td>最優先</td></tr>
                        <tr><td>スキンケア</td><td>3,000円/月</td><td>高い</td><td>高</td></tr>
                        <tr><td>筋トレ（ジム）</td><td>8,000円/月</td><td>非常に高い</td><td>最優先</td></tr>
                        <tr><td>歯のホワイトニング</td><td>10,000円/回</td><td>高い</td><td>高</td></tr>
                        <tr><td>ファッション勉強</td><td>0円（YouTube）</td><td>高い</td><td>高</td></tr>
                        <tr><td>読書・教養</td><td>1,500円/冊</td><td>非常に高い</td><td>最優先</td></tr>
                    </tbody>
                </table>

                <div class="info-box success">
                    <div class="info-box-title">心がけ</div>
                    <p>「外見を磨くのは相手のため。内面を磨くのは自分のため。両方やれ。」</p>
                </div>
            `,
            quiz: [
                { id: "q102_1", type: "choice", question: "清潔感の5大原則に含まれないものは？", options: ["髪型", "肌", "筋肉量", "香り"], answer: 2, explanation: "5大原則は髪型・肌・歯・服装・香りです。筋肉量は自分磨きの一環ですが5大原則には含まれません。" },
                { id: "q102_2", type: "choice", question: "ファッションで最も重要な要素は？", options: ["ブランド", "トレンド", "サイズ感", "価格"], answer: 2, explanation: "サイズ感が命です。ユニクロでもサイズが合っていればOKです。" },
                { id: "q102_3", type: "choice", question: "全身のコーディネートで推奨される色数は？", options: ["1色以内", "3色以内", "5色以内", "制限なし"], answer: 1, explanation: "迷ったら全身3色以内に収めることが推奨されています。" },
                { id: "q102_4", type: "choice", question: "自分磨きの投資で最優先とされるものに含まれないのは？", options: ["美容院", "筋トレ", "歯のホワイトニング", "読書・教養"], answer: 2, explanation: "最優先は美容院・筋トレ・読書/教養です。歯のホワイトニングは「高」優先度です。" },
                { id: "q102_5", type: "fill", question: "服装の原則「シンプル x ○○○ x 清潔感」。○○○に入る言葉は？（カタカナ3文字＋漢字1文字）", answer: "サイズ感", explanation: "ファッションの鉄板原則は「シンプル x サイズ感 x 清潔感」です。" }
            ]
        }
    ]
};
