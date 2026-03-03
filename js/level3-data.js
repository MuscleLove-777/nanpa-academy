const LEVEL3_DATA = {
    id: 3,
    title: "連絡先交換と倫理",
    icon: "📱",
    description: "連絡先交換のタイミング・フレーズと絶対に守るべきルールを学ぶ",
    modules: [
        {
            id: 301,
            title: "連絡先交換の技術",
            duration: "15分",
            content: `
                <h2>連絡先交換のタイミング</h2>
                <p>連絡先交換で最も重要なのは<strong>タイミング</strong>です。盛り上がりのピーク〜少し落ち着いた時に切り出すのがベストです。</p>

                <div class="info-box tip">
                    <div class="info-box-title">ベストタイミング</div>
                    <p>会話が盛り上がっているピーク付近で、自然に切り出す。</p>
                    <p>「楽しいからまた話したい！LINE交換しない？」</p>
                    <p>注意：ダラダラ続けて盛り下がってからでは遅い！</p>
                </div>

                <h2>連絡先交換の鉄板フレーズ</h2>
                <table>
                    <thead><tr><th>パターン</th><th>フレーズ</th><th>特徴</th></tr></thead>
                    <tbody>
                        <tr><td><strong>ストレート</strong></td><td>「もっと話したいんだけど、LINE交換してもらえたら嬉しい！」</td><td>率直で好感度高い</td></tr>
                        <tr><td><strong>口実付き</strong></td><td>「さっき言ってた〇〇のお店、URL送るからLINE教えて！」</td><td>自然な流れを作れる</td></tr>
                        <tr><td><strong>デート前提</strong></td><td>「今度あのお店一緒に行こうよ！連絡先交換しよう！」</td><td>次の約束と同時に</td></tr>
                    </tbody>
                </table>

                <h2>断られた時の対応（超重要）</h2>
                <div class="info-box danger">
                    <div class="info-box-title">絶対ルール</div>
                    <p>断られたら → 笑顔で「全然大丈夫！話してくれてありがとう！良い一日を！」</p>
                    <p><strong>絶対にやってはいけないこと：</strong></p>
                    <ul>
                        <li>食い下がる</li>
                        <li>態度を豹変させる（舌打ち・悪態）</li>
                        <li>しつこく理由を聞く</li>
                    </ul>
                    <p>断られた後のスマートな去り際こそ、その人の「本当の人間性」が出る</p>
                </div>
            `,
            quiz: [
                { id: "q301_1", type: "choice", question: "連絡先交換のベストタイミングは？", options: ["会話の最初に", "盛り上がりのピーク付近", "相手が帰ろうとしている時", "沈黙が続いた時"], answer: 1, explanation: "盛り上がりのピーク〜少し落ち着いた時が最適です。盛り下がってからでは遅いです。" },
                { id: "q301_2", type: "choice", question: "断られた時に絶対やってはいけないことは？", options: ["笑顔で去る", "お礼を言う", "食い下がる", "「良い一日を」と言う"], answer: 2, explanation: "食い下がることは絶対NGです。笑顔でお礼を言ってスマートに去ることが大切です。" },
                { id: "q301_3", type: "choice", question: "「口実付き」の連絡先交換フレーズとして適切なのは？", options: ["LINE教えて！", "連絡先交換しよう！", "さっき言ってたお店のURL送るからLINE教えて！", "もっと話したい！"], answer: 2, explanation: "会話中に出たお店やイベントの情報を送る口実を作ることで、自然に連絡先交換に持っていけます。" },
                { id: "q301_4", type: "choice", question: "断られた後の去り際で見られるのは何ですか？", options: ["話術のレベル", "本当の人間性", "外見の印象", "経済力"], answer: 1, explanation: "断られた後にどう振る舞うかに「本当の人間性」が出ます。スマートな去り際は最も重要です。" },
                { id: "q301_5", type: "fill", question: "断られた時に言うべき言葉は「全然大丈夫！話してくれて○○○○○！」", answer: "ありがとう", explanation: "断られても笑顔で感謝を伝えることが大切です。相手の時間を使ってくれたことへの敬意を示します。" }
            ]
        },
        {
            id: 302,
            title: "紳士の倫理規定",
            duration: "15分",
            content: `
                <h2>ナンパの絶対ルール</h2>
                <p>これらは「紳士の掟」であり、一つでも破ればそれは<strong>迷惑行為</strong>です。</p>

                <div class="info-box danger">
                    <div class="info-box-title">7つの絶対ルール</div>
                    <ol>
                        <li><strong>相手が嫌がったら即座に引く</strong> → しつこさは魅力ではない。恐怖でしかない</li>
                        <li><strong>夜道・人気のない場所では声をかけない</strong> → 相手に恐怖を与える場所は選ばない</li>
                        <li><strong>イヤホン・スマホに集中している人には声をかけない</strong> → 「話しかけないで」のサインを尊重する</li>
                        <li><strong>明らかに未成年には声をかけない</strong></li>
                        <li><strong>相手の個人情報を無理に聞き出さない</strong> → 信頼関係ができてから自然に共有されるもの</li>
                        <li><strong>SNSで晒さない・自慢しない</strong> → 相手の尊厳を守る</li>
                        <li><strong>酔っている相手には声をかけない</strong> → 正常な判断ができない状態を利用しない</li>
                    </ol>
                    <p>「ナンパは相手を幸せにする行為であるべき。相手が不快に感じた時点で、それは迷惑行為。」</p>
                </div>

                <h2>NOのサインを読み取る</h2>
                <table>
                    <thead><tr><th>サインの種類</th><th>具体例</th><th>対応</th></tr></thead>
                    <tbody>
                        <tr><td><strong>明確なNO</strong></td><td>「結構です」と明言、無視して歩き続ける、身体を背ける</td><td>即座に撤退</td></tr>
                        <tr><td><strong>やんわりNO</strong></td><td>「急いでるので...」、曖昧な笑顔で沈黙</td><td>1回だけ軽く粘ってOK、それでもダメなら撤退</td></tr>
                        <tr><td><strong>OK〜好意的サイン</strong></td><td>足を止めてくれる、目を合わせて笑顔、質問を返してくる</td><td>会話を続けてOK</td></tr>
                    </tbody>
                </table>

                <div class="info-box success">
                    <div class="info-box-title">好意的サインの見分け方</div>
                    <ul>
                        <li>足を止めてくれる</li>
                        <li>目を合わせて笑顔</li>
                        <li>質問を返してくる</li>
                        <li>身体がこちらを向いている</li>
                    </ul>
                </div>
            `,
            quiz: [
                { id: "q302_1", type: "choice", question: "7つの絶対ルールに含まれないのは？", options: ["相手が嫌がったら即座に引く", "夜道で声をかけない", "できるだけ多くの人に声をかける", "酔っている相手には声をかけない"], answer: 2, explanation: "「数を打つ」ことはルールではありません。質と誠実さが重要です。" },
                { id: "q302_2", type: "choice", question: "「やんわりNO」の場合の正しい対応は？", options: ["無視して話し続ける", "1回だけ軽く粘ってダメなら撤退", "理由をしつこく聞く", "怒りを表す"], answer: 1, explanation: "やんわりNOの場合は1回だけ「じゃあ一言だけ！」と軽く粘ってOKですが、それでもダメなら撤退します。" },
                { id: "q302_3", type: "choice", question: "好意的サインに含まれるのは？", options: ["イヤホンをつけている", "スマホを見続けている", "質問を返してくる", "身体を背けている"], answer: 2, explanation: "質問を返してくるのは相手が会話に興味を持っているサインです。" },
                { id: "q302_4", type: "choice", question: "ナンパが「迷惑行為」になるのはいつですか？", options: ["声をかけた時", "断られた時", "相手が不快に感じた時点", "連絡先を聞いた時"], answer: 2, explanation: "ナンパは相手を幸せにする行為であるべきで、相手が不快に感じた時点でそれは迷惑行為です。" },
                { id: "q302_5", type: "fill", question: "「話しかけないで」のサインとして、イヤホンや何に集中している人には声をかけないべきですか？", answer: "スマホ", explanation: "イヤホンやスマホに集中している人は「話しかけないで」のサインを出しています。尊重しましょう。" }
            ]
        }
    ]
};
