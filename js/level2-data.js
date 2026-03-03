const LEVEL2_DATA = {
    id: 2,
    title: "声かけと会話の技術",
    icon: "🗣️",
    description: "声かけの3大原則、オープナーの型、会話テクニックを習得する",
    modules: [
        {
            id: 201,
            title: "声かけの技術",
            duration: "15分",
            content: `
                <h2>声かけの3大原則</h2>
                <p>最初の10秒で勝負が決まります。以下の3原則を必ず守りましょう。</p>
                <div class="info-box tip">
                    <div class="info-box-title">3大原則</div>
                    <ul>
                        <li><strong>1. 笑顔</strong> -- 口角を上げてから声をかける</li>
                        <li><strong>2. 目を見る</strong> -- 自信と誠実さのシグナル</li>
                        <li><strong>3. 堂々と</strong> -- 小声・早口・挙動不審は即アウト</li>
                    </ul>
                </div>

                <h2>オープナー（声かけフレーズ）の型</h2>
                <h3>Type A：ストレート型（直球）</h3>
                <div class="info-box success">
                    <div class="info-box-title">例文</div>
                    <p>「すみません、歩いてる姿がすごく素敵だったので思わず声かけちゃいました。少しだけお話しできますか？」</p>
                    <p>メリット：誠実さが伝わる / 意図が明確<br>適する場面：街中、昼間、相手が急いでいない時</p>
                </div>

                <h3>Type B：シチュエーション型（状況利用）</h3>
                <div class="info-box tip">
                    <div class="info-box-title">例文</div>
                    <p>「このあたりで美味しいカフェ知ってますか？...あ、実はちょっとお話ししたくて声かけました（笑）」</p>
                    <p>メリット：自然に会話に入れる<br>適する場面：カフェ、書店、イベント会場</p>
                </div>

                <h3>Type C：観察型（相手に関する気づき）</h3>
                <div class="info-box tip">
                    <div class="info-box-title">例文</div>
                    <p>「その本、面白いですよね！自分も読みました。」<br>「そのバッグ素敵ですね、どこのブランドですか？」</p>
                    <p>メリット：相手への関心が伝わる<br>適する場面：共通の話題がある場所</p>
                </div>

                <h2>声かけ直後の30秒 -- ゴールデンタイム</h2>
                <ul>
                    <li><strong>声かけ（5秒）</strong></li>
                    <li><strong>自己紹介（5秒）</strong>：「〇〇って言います」</li>
                    <li><strong>笑いを1つ取る（10秒）</strong> ← ここが最重要</li>
                    <li><strong>相手の名前を聞く（5秒）</strong>：「お名前聞いてもいいですか？」</li>
                    <li><strong>会話モードへ移行（5秒〜）</strong></li>
                </ul>

                <h3>鉄板の笑いの取り方</h3>
                <ul>
                    <li><strong>自虐ネタ</strong>：「こういうの慣れてなくて手が震えてます（笑）」</li>
                    <li><strong>意外性</strong>：「ナンパっぽいですけど、実は方向音痴で本当に迷ってて...いや、すみません嘘です（笑）」</li>
                    <li><strong>大げさリアクション</strong>：「えっ、〇〇なんですか！？運命ですねこれは（笑）」</li>
                </ul>
            `,
            quiz: [
                { id: "q201_1", type: "choice", question: "声かけの3大原則に含まれないものは？", options: ["笑顔", "目を見る", "早口で話す", "堂々と"], answer: 2, explanation: "3大原則は「笑顔・目を見る・堂々と」です。小声・早口・挙動不審は即アウトです。" },
                { id: "q201_2", type: "choice", question: "声かけ直後の30秒で最も重要なことは？", options: ["連絡先を聞く", "笑いを1つ取る", "自分の経歴を話す", "褒めまくる"], answer: 1, explanation: "最初の30秒で笑いを1つ取ることが最重要です。笑いは緊張をほぐし、会話への入り口を作ります。" },
                { id: "q201_3", type: "choice", question: "ストレート型オープナーの最大のメリットは？", options: ["誰にでも使える", "誠実さが伝わり意図が明確", "笑いが取りやすい", "断られにくい"], answer: 1, explanation: "ストレート型は意図が明確で誠実さが伝わるため、相手も対応しやすいメリットがあります。" },
                { id: "q201_4", type: "choice", question: "観察型オープナーはどんな場面に適していますか？", options: ["夜の繁華街", "混雑した駅", "共通の話題がある場所", "移動中の電車内"], answer: 2, explanation: "観察型は本やバッグなど共通の話題がある場所で、相手への関心を自然に示せます。" },
                { id: "q201_5", type: "fill", question: "声かけ直後の最重要な30秒間のことを何タイムと呼びますか？（カタカナ4文字）", answer: "ゴールデン", explanation: "声かけ直後の30秒は「ゴールデンタイム」と呼ばれ、ここでの印象が会話の成否を決めます。" }
            ]
        },
        {
            id: 202,
            title: "会話の技術",
            duration: "15分",
            content: `
                <h2>会話の黄金比率</h2>
                <div class="info-box tip">
                    <div class="info-box-title">鉄則</div>
                    <p><strong>自分が話す：相手が話す ＝ 3：7</strong></p>
                    <p>「面白い人」より「一緒にいて楽な人」を目指す</p>
                </div>

                <h2>質問の技術 -- 尋問にしない</h2>
                <table>
                    <thead><tr><th>NG（尋問パターン）</th><th>OK（会話パターン）</th></tr></thead>
                    <tbody>
                        <tr><td>「仕事何してるんですか？」</td><td>「雰囲気的にクリエイティブ系？」</td></tr>
                        <tr><td>「趣味は？」</td><td>「休みの日って何してるとき一番楽しい？」</td></tr>
                        <tr><td>「彼氏いるんですか？」</td><td>（序盤では聞かない）</td></tr>
                        <tr><td>「どこ住み？」</td><td>（序盤では聞かない）</td></tr>
                    </tbody>
                </table>
                <p>コツ：「Yes/No」で終わる質問 → 「エピソード」を引き出す質問へ</p>

                <h2>傾聴のテクニック「SHARPの法則」</h2>
                <table>
                    <thead><tr><th>頭文字</th><th>意味</th><th>具体例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>S</strong></td><td>Smile（笑顔で聞く）</td><td>常に口角を上げる</td></tr>
                        <tr><td><strong>H</strong></td><td>Hmm（相槌を打つ）</td><td>「へえ〜！」「なるほど〜」「うんうん」</td></tr>
                        <tr><td><strong>A</strong></td><td>Ask（深掘りする）</td><td>「それってどういうこと？」「きっかけは？」</td></tr>
                        <tr><td><strong>R</strong></td><td>Repeat（オウム返し）</td><td>「〇〇なんだ！」← 相手の言葉を繰り返す</td></tr>
                        <tr><td><strong>P</strong></td><td>Praise（褒める）</td><td>「それめちゃくちゃいいね！」</td></tr>
                    </tbody>
                </table>

                <h2>盛り上がりやすいトピック TOP5</h2>
                <ul>
                    <li><strong>1. 食べ物・グルメ</strong> → 「最近どこか美味しいとこ行った？」</li>
                    <li><strong>2. 旅行・お出かけ</strong> → 「次の連休どっか行く予定ある？」</li>
                    <li><strong>3. 共通の体験</strong> → その場の状況に関すること</li>
                    <li><strong>4. 夢・やりたいこと</strong> → 「もし1ヶ月休みあったら何する？」</li>
                    <li><strong>5. 相手の得意なこと</strong> → 「詳しそう！教えて！」</li>
                </ul>

                <div class="info-box danger">
                    <div class="info-box-title">避けるべきトピック</div>
                    <ul>
                        <li>政治・宗教</li>
                        <li>年収・学歴</li>
                        <li>元カレ・元カノの詳細</li>
                        <li>ネガティブな話（愚痴・悪口）</li>
                    </ul>
                </div>
            `,
            quiz: [
                { id: "q202_1", type: "choice", question: "会話の黄金比率（自分：相手）は？", options: ["5:5", "7:3", "3:7", "1:9"], answer: 2, explanation: "自分が話す：相手が話す = 3:7 が黄金比率です。相手に多く話してもらいましょう。" },
                { id: "q202_2", type: "choice", question: "SHARPの法則で「R」は何を意味しますか？", options: ["React（反応する）", "Repeat（オウム返し）", "Relax（リラックスする）", "Respect（尊敬する）"], answer: 1, explanation: "Rは Repeat（オウム返し）です。相手の言葉を繰り返すことで「聞いている」ことが伝わります。" },
                { id: "q202_3", type: "choice", question: "序盤で避けるべき質問は？", options: ["好きな食べ物は？", "休みの日は何してる？", "彼氏いるんですか？", "ここよく来るの？"], answer: 2, explanation: "「彼氏いるんですか？」は序盤では聞かないのが鉄則です。信頼関係ができてから自然に出てくるものです。" },
                { id: "q202_4", type: "choice", question: "「仕事何してるんですか？」のより良い聞き方は？", options: ["職業は？", "年収いくら？", "雰囲気的にクリエイティブ系？", "会社名教えて"], answer: 2, explanation: "直球の質問は尋問になります。「雰囲気的に〇〇系？」と推測を投げかけると会話が広がります。" },
                { id: "q202_5", type: "fill", question: "傾聴のテクニックは「○○○○○の法則」と呼ばれます。アルファベット5文字で答えてください。", answer: "SHARP", explanation: "SHARPの法則は Smile, Hmm, Ask, Repeat, Praise の頭文字で、傾聴の基本テクニックです。" }
            ]
        }
    ]
};
