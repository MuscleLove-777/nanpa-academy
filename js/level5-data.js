const LEVEL5_DATA = {
    id: 5,
    title: "ビジネス転用と成長ロードマップ",
    icon: "🎯",
    description: "ナンパスキルのビジネス転用と段階的な上達プランを学ぶ",
    modules: [
        {
            id: 501,
            title: "ナンパ力はビジネス力",
            duration: "15分",
            content: `
                <h2>ナンパで身につくビジネススキル</h2>
                <p>ナンパで鍛えたスキルは、ビジネスの様々な場面で直接転用できます。</p>

                <table>
                    <thead><tr><th>ナンパスキル</th><th>ビジネスでの転用先</th></tr></thead>
                    <tbody>
                        <tr><td><strong>声かけの勇気</strong></td><td>テレアポ・飛び込み営業</td></tr>
                        <tr><td><strong>第一印象の技術</strong></td><td>プレゼン・面接</td></tr>
                        <tr><td><strong>傾聴力</strong></td><td>ヒアリング・1on1</td></tr>
                        <tr><td><strong>拒絶への耐性</strong></td><td>営業のメンタルタフネス</td></tr>
                        <tr><td><strong>空気を読む力</strong></td><td>商談・ネゴシエーション</td></tr>
                        <tr><td><strong>短時間で信頼構築</strong></td><td>新規クライアント開拓</td></tr>
                        <tr><td><strong>クロージング力</strong></td><td>契約締結・クロージング</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">本質</div>
                    <p>「初対面の相手から3分で信頼を得るスキル。これがビジネスで使えない理由がない。」</p>
                </div>

                <h2>具体的な転用例</h2>
                <h3>営業への転用</h3>
                <ul>
                    <li><strong>オープナーの技術</strong> → 商談のアイスブレイクに活用</li>
                    <li><strong>SHARPの法則</strong> → クライアントの本音を引き出すヒアリングに</li>
                    <li><strong>NOのサイン読み</strong> → 商談中の反応を読み取る力に</li>
                    <li><strong>クロージング</strong> → 二択提示法は営業でも使える</li>
                </ul>

                <h3>マネジメントへの転用</h3>
                <ul>
                    <li><strong>傾聴力</strong> → 部下の1on1での信頼構築に</li>
                    <li><strong>相手のモチベーション把握</strong> → チームマネジメントに</li>
                    <li><strong>拒絶への耐性</strong> → 困難なフィードバックを受ける力に</li>
                </ul>
            `,
            quiz: [
                { id: "q501_1", type: "choice", question: "ナンパの「声かけの勇気」がビジネスで転用できる場面は？", options: ["経理業務", "テレアポ・飛び込み営業", "システム開発", "データ分析"], answer: 1, explanation: "声をかける勇気は、テレアポや飛び込み営業など、初対面の相手にアプローチする場面で直接活かせます。" },
                { id: "q501_2", type: "choice", question: "SHARPの法則がビジネスで最も活きる場面は？", options: ["プログラミング", "クライアントへのヒアリング", "経費精算", "在庫管理"], answer: 1, explanation: "SHARPの法則（傾聴テクニック）は、クライアントの本音を引き出すヒアリングに直接転用できます。" },
                { id: "q501_3", type: "choice", question: "二択提示法がビジネスで使えるのはどの場面？", options: ["契約のクロージング", "社内メールの送信", "議事録の作成", "勤怠管理"], answer: 0, explanation: "二択提示法は営業のクロージングでも有効です。「いつか検討します」ではなく具体的な選択肢を提示します。" },
                { id: "q501_4", type: "choice", question: "ナンパの「空気を読む力」がビジネスで転用できるのは？", options: ["定型業務", "商談・ネゴシエーション", "書類整理", "タイピング"], answer: 1, explanation: "空気を読む力は商談やネゴシエーションで相手の本音や意図を読み取るのに不可欠なスキルです。" },
                { id: "q501_5", type: "fill", question: "初対面の相手から何分で信頼を得るスキルが重要ですか？（数字1文字）", answer: "3", explanation: "「初対面の相手から3分で信頼を得るスキル」がナンパの本質であり、ビジネスにも直結します。" }
            ]
        },
        {
            id: 502,
            title: "上達ロードマップ",
            duration: "15分",
            content: `
                <h2>段階的に成長する5つのレベル</h2>

                <h3>Level 1 -- 挨拶マン（1〜2週間）</h3>
                <div class="info-box tip">
                    <div class="info-box-title">目標と目的</div>
                    <p><strong>目標</strong>：1日3人に「こんにちは」と挨拶する<br>
                    <strong>目的</strong>：声を出すことへの抵抗をなくす</p>
                </div>

                <h3>Level 2 -- 会話マン（2〜4週間）</h3>
                <div class="info-box tip">
                    <div class="info-box-title">目標と目的</div>
                    <p><strong>目標</strong>：1日1人と30秒以上会話する<br>
                    <strong>目的</strong>：会話を続ける経験を積む</p>
                </div>

                <h3>Level 3 -- 連絡先ゲッター（1〜2ヶ月）</h3>
                <div class="info-box tip">
                    <div class="info-box-title">目標と目的</div>
                    <p><strong>目標</strong>：週に1件の連絡先交換<br>
                    <strong>目的</strong>：クロージング力をつける</p>
                </div>

                <h3>Level 4 -- デートメーカー（2〜3ヶ月）</h3>
                <div class="info-box success">
                    <div class="info-box-title">目標と目的</div>
                    <p><strong>目標</strong>：月に2回のデート実現<br>
                    <strong>目的</strong>：出会い → 関係構築の一連の流れを完成</p>
                </div>

                <h3>Level 5 -- コミュニケーションマスター（6ヶ月〜）</h3>
                <div class="info-box success">
                    <div class="info-box-title">目標と目的</div>
                    <p><strong>目標</strong>：誰とでも自然に会話を楽しめる状態<br>
                    <strong>目的</strong>：ナンパを超えた「人間力」の完成</p>
                </div>

                <h2>ナンパの本質</h2>
                <div class="info-box success">
                    <div class="info-box-title">まとめ</div>
                    <p>ナンパの本質は「テクニック」ではない。</p>
                    <ul>
                        <li>自分を磨き続ける<strong>「向上心」</strong></li>
                        <li>相手を思いやる<strong>「誠実さ」</strong></li>
                        <li>拒絶を恐れない<strong>「勇気」</strong></li>
                        <li>相手の気持ちを読む<strong>「共感力」</strong></li>
                    </ul>
                    <p>この4つが揃ったとき、声をかけた相手は「出会えてよかった」と思う。</p>
                    <p><strong>ナンパは最高の自己成長プログラムである。</strong></p>
                    <p>「すべての出会いに、敬意と感謝を。」</p>
                </div>
            `,
            quiz: [
                { id: "q502_1", type: "choice", question: "Level 1「挨拶マン」の目標は？", options: ["1日10人と会話する", "1日3人に挨拶する", "週に1件の連絡先交換", "月に2回のデート"], answer: 1, explanation: "Level 1は「1日3人にこんにちはと挨拶する」ことで、声を出すことへの抵抗をなくすのが目的です。" },
                { id: "q502_2", type: "choice", question: "ナンパの本質として挙げられる4要素に含まれないのは？", options: ["向上心", "誠実さ", "テクニック", "共感力"], answer: 2, explanation: "ナンパの本質は「テクニック」ではなく、向上心・誠実さ・勇気・共感力の4つです。" },
                { id: "q502_3", type: "choice", question: "Level 5「コミュニケーションマスター」の到達目標は？", options: ["100人に声をかける", "誰とでも自然に会話を楽しめる状態", "テクニックを完全習得", "有名人になる"], answer: 1, explanation: "Level 5は「誰とでも自然に会話を楽しめる状態」で、ナンパを超えた「人間力」の完成です。" },
                { id: "q502_4", type: "choice", question: "Level 3「連絡先ゲッター」の期間の目安は？", options: ["1週間", "1〜2ヶ月", "6ヶ月", "1年"], answer: 1, explanation: "Level 3は1〜2ヶ月をかけて、週1件の連絡先交換を目指してクロージング力をつけます。" },
                { id: "q502_5", type: "fill", question: "ナンパアカデミーのモットーは「すべての出会いに、敬意と○○を」です。", answer: "感謝", explanation: "「すべての出会いに、敬意と感謝を。」がナンパアカデミーのモットーです。" }
            ]
        }
    ]
};
