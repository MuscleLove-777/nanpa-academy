const LEVEL6_DATA = {
    id: 6,
    title: "上達ロードマップと総まとめ",
    icon: "🏆",
    description: "段階的な成長プランとナンパの本質を学ぶ",
    modules: [
        {
            id: 601,
            title: "上達ロードマップ",
            duration: "15分",
            content: `
<h2>段階的に成長する5つのレベル</h2>
<p>ナンパスキルは一朝一夕では身につきません。段階的にステップアップしていきましょう。</p>

<table>
<thead><tr><th>レベル</th><th>期間</th><th>目標</th><th>目的</th></tr></thead>
<tbody>
<tr><td><strong>Level 1: 挨拶マン</strong></td><td>1〜2週間</td><td>1日3人に「こんにちは」と挨拶</td><td>声を出すことへの抵抗をなくす</td></tr>
<tr><td><strong>Level 2: 会話マン</strong></td><td>2〜4週間</td><td>1日1人と30秒以上会話</td><td>会話を続ける経験を積む</td></tr>
<tr><td><strong>Level 3: 連絡先ゲッター</strong></td><td>1〜2ヶ月</td><td>週に1件の連絡先交換</td><td>クロージング力をつける</td></tr>
<tr><td><strong>Level 4: デートメーカー</strong></td><td>2〜3ヶ月</td><td>月に2回のデート実現</td><td>出会い→関係構築の流れを完成</td></tr>
<tr><td><strong>Level 5: コミュマスター</strong></td><td>6ヶ月〜</td><td>誰とでも自然に会話を楽しめる</td><td>ナンパを超えた「人間力」の完成</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">💡 上達のコツ</div>
<ul>
<li>各レベルを焦らずしっかりクリアしてから次へ進む</li>
<li>毎回の声かけ後に振り返りノートをつける</li>
<li>うまくいった点・改善点を言語化する習慣をつける</li>
</ul>
</div>
`,
            quiz: [
                {
                    id: "q601_1",
                    type: "choice",
                    question: "上達ロードマップのLevel 1「挨拶マン」の目的は？",
                    options: ["連絡先を交換すること", "30秒以上会話すること", "声を出すことへの抵抗をなくすこと", "デートに誘うこと"],
                    answer: 2,
                    explanation: "Level 1は「声を出す」ことへの心理的抵抗をなくすことが目的です。まずは挨拶から始めましょう。"
                },
                {
                    id: "q601_2",
                    type: "choice",
                    question: "Level 3「連絡先ゲッター」の目標はどれくらいのペース？",
                    options: ["1日1件", "週に1件", "月に1件", "週に5件"],
                    answer: 1,
                    explanation: "Level 3では週に1件の連絡先交換を目標にし、クロージング力を養います。"
                },
                {
                    id: "q601_3",
                    type: "choice",
                    question: "最終段階「コミュニケーションマスター」の状態は？",
                    options: ["100%成功する", "誰とでも自然に会話を楽しめる", "テクニックを完全に暗記している", "毎日10人に声をかけられる"],
                    answer: 1,
                    explanation: "最終段階はテクニックではなく、誰とでも自然にコミュニケーションを楽しめる「人間力」の完成です。"
                }
            ]
        },
        {
            id: 602,
            title: "ナンパの本質と心構え",
            duration: "15分",
            content: `
<h2>ナンパの本質</h2>
<p>ナンパの本質は「テクニック」ではありません。以下の4つが揃ったとき、声をかけた相手は「出会えてよかった」と感じます。</p>

<table>
<thead><tr><th>要素</th><th>説明</th></tr></thead>
<tbody>
<tr><td><strong>向上心</strong></td><td>自分を磨き続ける姿勢。外見・内面・会話力を常にアップデート</td></tr>
<tr><td><strong>誠実さ</strong></td><td>相手を思いやる気持ち。数を追うのではなく、一人一人を大切にする</td></tr>
<tr><td><strong>勇気</strong></td><td>拒絶を恐れない心の強さ。失敗を学びに変える力</td></tr>
<tr><td><strong>共感力</strong></td><td>相手の気持ちを読む力。言葉の裏にある感情を理解する</td></tr>
</tbody>
</table>

<div class="info-box success">
<div class="info-box-title">すべての出会いに、敬意と感謝を</div>
ナンパは最高の自己成長プログラムです。コミュニケーション力、メンタルの強さ、共感力。これらは人生のあらゆる場面で活きるスキルです。
</div>

<h2>ナンパ力はビジネス力</h2>
<table>
<thead><tr><th>ナンパスキル</th><th>ビジネスでの転用先</th></tr></thead>
<tbody>
<tr><td>声かけの勇気</td><td>テレアポ・飛び込み営業</td></tr>
<tr><td>第一印象の技術</td><td>プレゼン・面接</td></tr>
<tr><td>傾聴力</td><td>ヒアリング・1on1</td></tr>
<tr><td>拒絶への耐性</td><td>営業のメンタルタフネス</td></tr>
<tr><td>短時間で信頼構築</td><td>新規クライアント開拓</td></tr>
<tr><td>クロージング力</td><td>契約締結・クロージング</td></tr>
</tbody>
</table>
`,
            quiz: [
                {
                    id: "q602_1",
                    type: "choice",
                    question: "ナンパの本質として挙げられる4要素に含まれないものは？",
                    options: ["向上心", "テクニック", "勇気", "共感力"],
                    answer: 1,
                    explanation: "ナンパの本質は「テクニック」ではなく、向上心・誠実さ・勇気・共感力の4つです。"
                },
                {
                    id: "q602_2",
                    type: "choice",
                    question: "ナンパで鍛えた「拒絶への耐性」はビジネスのどこで活きる？",
                    options: ["経理業務", "営業のメンタルタフネス", "プログラミング", "データ入力"],
                    answer: 1,
                    explanation: "拒絶を恐れない精神力は、営業活動でのメンタルタフネスに直結します。"
                },
                {
                    id: "q602_3",
                    type: "choice",
                    question: "このアカデミーが最も伝えたいメッセージは？",
                    options: ["テクニックを極めれば成功する", "数をこなせば必ず成功する", "すべての出会いに敬意と感謝を", "見た目が一番重要"],
                    answer: 2,
                    explanation: "ナンパアカデミーの核心メッセージは「すべての出会いに、敬意と感謝を」です。"
                }
            ]
        },
        {
            id: 603,
            title: "総合確認テスト",
            duration: "15分",
            content: `
<h2>ナンパアカデミー 総合確認</h2>
<p>全レベルで学んだ内容を振り返りましょう。</p>

<table>
<thead><tr><th>レベル</th><th>学んだこと</th></tr></thead>
<tbody>
<tr><td>Level 1</td><td>マインドセット・心構え</td></tr>
<tr><td>Level 2</td><td>外見と第一印象</td></tr>
<tr><td>Level 3</td><td>声かけと会話テクニック</td></tr>
<tr><td>Level 4</td><td>連絡先交換とデート</td></tr>
<tr><td>Level 5</td><td>ビジネス転用と成長</td></tr>
<tr><td>Level 6</td><td>上達ロードマップと本質</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">💡 実践あるのみ</div>
知識だけでは成長しません。明日から「挨拶マン」として、まず3人に挨拶することから始めてみましょう。
</div>
`,
            quiz: [
                {
                    id: "q603_1",
                    type: "choice",
                    question: "声かけで最も大切な要素は？",
                    options: ["完璧なセリフを用意する", "笑顔とアイコンタクト", "高級ブランドの服を着る", "大きな声で呼び止める"],
                    answer: 1,
                    explanation: "第一印象で最も重要なのは笑顔とアイコンタクトです。セリフよりも表情や態度が相手に伝わります。"
                },
                {
                    id: "q603_2",
                    type: "choice",
                    question: "会話を続けるコツとして正しいものは？",
                    options: ["自分の話を中心にする", "相手の言葉を拾って質問を広げる", "沈黙を絶対に作らない", "難しい話題を提供する"],
                    answer: 1,
                    explanation: "相手の言葉を拾って質問を広げる「拡張質問」が会話を続けるコツです。傾聴力が鍵になります。"
                },
                {
                    id: "q603_3",
                    type: "choice",
                    question: "ナンパが「最高の自己成長プログラム」と言われる理由は？",
                    options: ["お金がかからないから", "コミュ力・メンタル・共感力など人生全般で活きるスキルが鍛えられるから", "モテるようになるから", "友達が増えるから"],
                    answer: 1,
                    explanation: "ナンパで鍛えられるスキル（コミュニケーション力、メンタルの強さ、共感力）は人生のあらゆる場面で活きます。"
                }
            ]
        }
    ]
};
