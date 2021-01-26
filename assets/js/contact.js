/**
 * @author Mitsutoshi Nakamura <mitsutoshi.nakamura.jp@gmail.com>
 */

$(function () {
    var app = {
        init: function () {
            app.bind();
        },
        bind: function () {
            $('#f0').on('submit', app.form);
        },
        form: function () {
            var msg = [];
            var err = 0;

            // 名前
            switch (true) {
                case $('#f0_name').val() === '':
                    msg.push('・「お名前」を入力して下さい。');
                    err++;
                    break;
            }

            // フリガナ
            switch (true) {
                case $('#f0_kana').val() === '':
                    msg.push('・「お名前（フリガナ）」を入力して下さい。');
                    err++;
                    break;
            }
			
			// 年齢
            switch (true) {
                case $('#f0_age').val() === '':
                    msg.push('・「年齢」を入力して下さい。');
                    err++;
                    break;
            }
			
            // 郵便01
            switch (true) {
                case $('#f0_post01').val() === '':
                    msg.push('・「郵便番号 上3桁」を入力して下さい。');
                    err++;
                    break;
            }
            
            
            // 郵便02
            switch (true) {
                case $('#f0_post02').val() === '':
                    msg.push('・「郵便番号 下4桁」を入力して下さい。');
                    err++;
                    break;
            }
            
            // 住所
            switch (true) {
                case $('#f0_address').val() === '':
                    msg.push('・「ご住所」を入力して下さい。');
                    err++;
                    break;
            }
            
			// 電話番号
            /*
            var tel = $('#f0_tel').val();
            switch (true) {
                case tel === '':
                    msg.push('・「お電話番号」を入力して下さい。');
                    err++;
                    break;

                case !/^[0-9\-]+$/.test(tel):
                    msg.push('・「お電話番号」が不正です。');
                    err++;
                    break;
            }
            */

            // メールアドレス
            var mail1 = $('#f0_mail1').val();
            var mail2 = $('#f0_mail2').val();
            switch (true) {
                case mail1 === '':
                    msg.push('・「メールアドレス」を入力して下さい。');
                    err++;
                    break;

                case !/^[^@]+@[^@]+\.[^@]+$/.test(mail1):
                    msg.push('・「メールアドレス」が不正です。');
                    err++;
                    break;

                case mail1 !== mail2:
                    msg.push('・「メールアドレス」が異なります。');
                    err++;
                    break;
            }
			
			// お問い合わせ内容
            switch (true) {
                case $('#f0_text').val() === '':
                    msg.push('・「お問い合わせ内容」を入力して下さい。');
                    err++;
                    break;
            }

            if (err) {
                alert(msg.join("\n"));
                return false;
            } else {
                this.commit();
            }
        },
        pr: function (data) {
            console.log(data);
        }
    };

    app.init();
});