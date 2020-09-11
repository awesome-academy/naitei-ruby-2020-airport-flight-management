I18n.translations || (I18n.translations = {});
I18n.translations["ja"] = I18n.extend((I18n.translations["ja"] || {}), {"activerecord":{"errors":{"messages":{"record_invalid":"バリデーションに失敗しました: %{errors}","restrict_dependent_destroy":{"has_many":"%{record}が存在しているので削除できません","has_one":"%{record}が存在しているので削除できません"}}}},"air_officers":{"index":{"action":"アクション","button_text":"アップロードする","email":"メール","name":"名前","staff_code":"スタッフコード","sure":"本気ですか？","text_head":"データをインポートする","title":"航空管制官 マネージャー"}},"date":{"abbr_day_names":["日","月","火","水","木","金","土"],"abbr_month_names":[null,"1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],"day_names":["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"],"formats":{"default":"%Y/%m/%d","long":"%Y年%m月%d日(%a)","short":"%m/%d"},"month_names":[null,"1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],"order":["year","month","day"]},"datetime":{"distance_in_words":{"about_x_hours":{"one":"約1時間","other":"約%{count}時間"},"about_x_months":{"one":"約1ヶ月","other":"約%{count}ヶ月"},"about_x_years":{"one":"約1年","other":"約%{count}年"},"almost_x_years":{"one":"1年弱","other":"%{count}年弱"},"half_a_minute":"30秒前後","less_than_x_minutes":{"one":"1分以内","other":"%{count}分未満"},"less_than_x_seconds":{"one":"1秒以内","other":"%{count}秒未満"},"over_x_years":{"one":"1年以上","other":"%{count}年以上"},"x_days":{"one":"1日","other":"%{count}日"},"x_minutes":{"one":"1分","other":"%{count}分"},"x_months":{"one":"1ヶ月","other":"%{count}ヶ月"},"x_seconds":{"one":"1秒","other":"%{count}秒"},"x_years":{"one":"1年","other":"%{count}年"}},"prompts":{"day":"日","hour":"時","minute":"分","month":"月","second":"秒","year":"年"}},"devise":{"sessions":{"create":{"invalid":"無効なメール/パスワードです。"},"new":{"fogot_password":"パスワードを忘れ？","log_in":"ログイン","password":"パスワード","remember_me_content":"私を記憶する","title_error_pass":"（6から20文字）","username":"ユーザ名"}}},"errors":{"format":"%{attribute}%{message}","messages":{"accepted":"を受諾してください","blank":"を入力してください","confirmation":"と%{attribute}の入力が一致しません","empty":"を入力してください","equal_to":"は%{count}にしてください","even":"は偶数にしてください","exclusion":"は予約されています","greater_than":"は%{count}より大きい値にしてください","greater_than_or_equal_to":"は%{count}以上の値にしてください","inclusion":"は一覧にありません","invalid":"は不正な値です","less_than":"は%{count}より小さい値にしてください","less_than_or_equal_to":"は%{count}以下の値にしてください","model_invalid":"バリデーションに失敗しました: %{errors}","not_a_number":"は数値で入力してください","not_an_integer":"は整数で入力してください","odd":"は奇数にしてください","other_than":"は%{count}以外の値にしてください","present":"は入力しないでください","required":"を入力してください","taken":"はすでに存在します","too_long":"は%{count}文字以内で入力してください","too_short":"は%{count}文字以上で入力してください","wrong_length":"は%{count}文字で入力してください"},"template":{"body":"次の項目を確認してください","header":{"one":"%{model}にエラーが発生しました","other":"%{model}に%{count}個のエラーが発生しました"}}},"helpers":{"select":{"prompt":"選択してください"},"submit":{"create":"登録する","submit":"保存する","update":"更新する"}},"i18n":{"plural":{"keys":["other"],"rule":{}}},"import_schedules":{"create":{"head":"エラーのある行のリスト","row":"Excelファイルの番号","stt":"番号順","success":"更新成功"}},"import_users":{"create":{"success":"更新成功"}},"layouts":{"application":{"name":"フライト管理"},"header":{"japanese":"日本語","login":"登録","logout":"ログアウト","name":"フライト管理","profile":"プロフィール","search":"検索","vietnamese":"Tiếng Việt"},"sidebar":{"actions":"仕事","air_traffic_officer":"航空管制官 マネージャー","busy":"忙しい","create_request":"リクエストを作成する","management_plane":"飛行経路の管理","name":"アドミン","offline":"隠す","online":"活動","pilot":"パイロット マネージャー","profile":"プロフィール","schedules":"スケジュール","settings":"設定","view_request":"リクエストを見る"}},"notifications":{"index":{"ago":"前"}},"number":{"currency":{"format":{"delimiter":",","format":"%n%u","precision":0,"separator":".","significant":false,"strip_insignificant_zeros":false,"unit":"円"}},"format":{"delimiter":",","precision":3,"separator":".","significant":false,"strip_insignificant_zeros":false},"human":{"decimal_units":{"format":"%n %u","units":{"billion":"十億","million":"百万","quadrillion":"千兆","thousand":"千","trillion":"兆","unit":""}},"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n%u","units":{"byte":"バイト","eb":"EB","gb":"GB","kb":"KB","mb":"MB","pb":"PB","tb":"TB"}}},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}}},"pilots":{"index":{"action":"アクション","button_text":"アップロードする","email":"メール","name":"名前","staff_code":"スタッフコード","sure":"本気ですか？","text_head":"データをインポートする","title":"パイロット マネージャー"}},"ransack":{"all":"全て","and":"と","any":"いずれか","asc":"昇順","attribute":"属性","combinator":"組み合わせ","condition":"状態","desc":"降順","or":"あるいは","predicate":"は以下である","predicates":{"blank":"は空である","cont":"は以下を含む","cont_all":"は以下の全てを含む","cont_any":"はいずれかを含む","does_not_match":"は以下と合致していない","does_not_match_all":"は以下の全てに合致していない","does_not_match_any":"は以下のいずれかに合致していない","end":"は以下で終わる","end_all":"は以下の全てで終わる","end_any":"は以下のいずれかで終わる","eq":"は以下と等しい","eq_all":"は以下の全てに等しい","eq_any":"は以下のいずれかに等しい","false":"偽","gt":"は以下より大きい","gt_all":"は以下の全てより大きい","gt_any":"は以下のいずれかより大きい","gteq":"は以下より大きいか等しい","gteq_all":"は以下の全てより大きいか等しい","gteq_any":"は以下のいずれかより大きいか等しい","in":"は以下の範囲内である","in_all":"は以下の全ての範囲内である","in_any":"は以下のいずれかの範囲内である","lt":"は以下よりも小さい","lt_all":"は以下の全てよりも小さい","lt_any":"は以下のいずれかより小さい","lteq":"は以下より小さいか等しい","lteq_all":"は以下の全てより小さいか等しい","lteq_any":"は以下のいずれかより小さいか等しい","matches":"は以下と合致している","matches_all":"は以下の全てと合致している","matches_any":"は以下のいずれかと合致している","not_cont":"は含まない","not_cont_all":"は以下の全てを含まない","not_cont_any":"は以下のいずれかを含まない","not_end":"は以下のどれでも終わらない","not_end_all":"は以下の全てで終わらない","not_end_any":"は以下のいずれかで終わらない","not_eq":"は以下と等しくない","not_eq_all":"は以下の全てと等しくない","not_eq_any":"は以下のいずれかに等しくない","not_in":"は以下の範囲内でない","not_in_all":"は以下の全ての範囲内","not_in_any":"は以下のいずれかの範囲内でない","not_null":"は無効ではない","not_start":"は以下で始まらない","not_start_all":"は以下の全てで始まらない","not_start_any":"は以下のいずれかで始まらない","null":"無効","present":"は存在する","start":"は以下で始まる","start_all":"は以下の全てで始まる","start_any":"は以下のどれかで始まる","true":"真"},"search":"検索","sort":"分類","value":"値"},"requests":{"alert":"データを出すことが失敗しました。","create":{"create_request_fail":"リクエストを作成することが失敗しました。","create_request_success":"リクエストを作成することが成功しました。"},"index":{"actions":"アクション","approve":"承認","content":"理由","decline":"低下","executed":"実行された","head":"リクエストを見る","id":"ID","pending":"保留中","pilot_name":"パイロットの名前","schedule_name":"スケジュールの名前","search":"検索","status":"状況"},"new":{"create_request":"リクエストを作成する","from":"から","pilot_name":"パイロットの名前","plane_name":"飛行機の名前","reason":"理由","runway":"滑走路","schedule_id":"スケジュールID","schedule_name":"スケジュールの名前","submit":"申し出る","title":"タイトル","to":"まで"},"title_requests":{"absence":"欠席","early":"早い","late":"遅刻"}},"schedules":{"edit":{"doing":"処理","done":"達成した","edit":"フライトスケジュールを編集","from":"から","plane_code":"飛行機","runway_id":"滑走路","status":"状況","submit":"編集","time":"飛行時間","title":"タイトル","to":"まで","user_code":"ユーザID"},"find_schedule":{"noId":"IDがない"},"index":{"btn_edit":"編集","button_text":"アップロードする","delete":"削除","from":"から","plane_name":"飛行機の名前","run_way":"滑走路","search":"検索","text_head":"データをインポートする","time":"飛行時間","title":"スケジュール","to":"まで"},"runwayable":{"check":"小切手　滑走路","dulicate":"中古は別の滑走路に変更してください","id":"ID","id_runway":"滑走路のID","name":"名前","no_exist":"存在しません。別の滑走路に変更してください","runway":"滑走路番号"}},"sessions":{"create":{"invalid":"無効なメール/パスワードです。"},"new":{"fogot_password":"パスワードを忘れ？","log_in":"ログイン","password":"パスワード","remember_me_content":"私を記憶する","title_error_pass":"（6から20文字）","username":"ユーザ名"}},"static_pages":{"home":{"welcome":"こんにちは !!"}},"support":{"array":{"last_word_connector":"、","two_words_connector":"、","words_connector":"、"}},"time":{"am":"午前","formats":{"default":"%Y年%m月%d日(%a) %H時%M分%S秒 %z","long":"%Y/%m/%d %H:%M","short":"%m/%d %H:%M"},"pm":"午後"},"users":{"destroy":{"deleted":"正常に削除されました"},"edit":{"button_text":"編集する","email":"メール","name":"名前","name_form":"パイロット情報を編集する","staff_code":"スタッフコード","title":"パイロット情報を編集する"},"show":{"title":"個人情報"},"update":{"update_fail":"更新に失敗しました","updated":"正常に更新されました"}},"views":{"pagination":{"first":"« 最初","last":"最後 »","next":"後 ›","previous":"‹ 前"}}});
I18n.translations["vi"] = I18n.extend((I18n.translations["vi"] || {}), {"activerecord":{"errors":{"messages":{"record_invalid":"Có các lỗi sau: %{errors}","restrict_dependent_destroy":{"has_many":"Không thể xóa do tồn tại một số đối tượng phụ thuộc %{record}","has_one":"Không thể xóa do tồn tại đối tượng phụ thuộc %{record}"}}}},"air_officers":{"index":{"action":"Thao tác","button_submit":"Tải lên","button_text":"Tải dữ liệu Người dùng lên","email":"Email","name":"Họ và Tên","staff_code":"Mã nhân viên","sure":"Chắc chắn muốn xóa?","title":"QL nhân viên không lưu"}},"date":{"abbr_day_names":["CN","Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7"],"abbr_month_names":[null,"Thg 1","Thg 2","Thg 3","Thg 4","Thg 5","Thg 6","Thg 7","Thg 8","Thg 9","Thg 10","Thg 11","Thg 12"],"day_names":["Chủ nhật","Thứ hai","Thứ ba","Thứ tư","Thứ năm","Thứ sáu","Thứ bảy"],"formats":{"default":"%d-%m-%Y","long":"%d %B, %Y","short":"%d %b"},"month_names":[null,"Tháng một","Tháng hai","Tháng ba","Tháng tư","Tháng năm","Tháng sáu","Tháng bảy","Tháng tám","Tháng chín","Tháng mười","Tháng mười một","Tháng mười hai"],"order":["day","month","year"]},"datetime":{"distance_in_words":{"about_x_hours":{"one":"khoảng 1 giờ","other":"khoảng %{count} giờ"},"about_x_months":{"one":"khoảng 1 tháng","other":"khoảng %{count} tháng"},"about_x_years":{"one":"khoảng 1 năm","other":"khoảng %{count} năm"},"almost_x_years":{"one":"gần 1 năm","other":"gần %{count} năm"},"half_a_minute":"30 giây","less_than_x_minutes":{"one":"chưa tới 1 phút","other":"chưa tới %{count} phút"},"less_than_x_seconds":{"one":"chưa tới 1 giây","other":"chưa tới %{count} giây"},"over_x_years":{"one":"hơn 1 năm","other":"hơn %{count} năm"},"x_days":{"one":"1 ngày","other":"%{count} ngày"},"x_minutes":{"one":"1 phút","other":"%{count} phút"},"x_months":{"one":"1 tháng","other":"%{count} tháng"},"x_seconds":{"one":"1 giây","other":"%{count} giây"}},"prompts":{"day":"Ngày","hour":"Giờ","minute":"Phút","month":"Tháng","second":"Giây","year":"Năm"}},"devise":{"sessions":{"create":{"invalid":"Email/Mật khẩu không hợp lệ."},"new":{"fogot_password":"Quên mật khẩu?","log_in":"Đăng nhập","password":"Mật khẩu","remember_me_content":"Ghi nhớ tôi","title_error_pass":"Mật khẩu phải từ 6 đến 20 ký tự","username":"Tên đăng nhập"}}},"errors":{"format":"%{attribute} %{message}","messages":{"accepted":"phải được đồng ý","blank":"không thể để trắng","confirmation":"không khớp với xác nhận","empty":"không thể rỗng","equal_to":"phải bằng %{count}","even":"phải là số chẵn","exclusion":"đã được giành trước","greater_than":"phải lớn hơn %{count}","greater_than_or_equal_to":"phải lớn hơn hoặc bằng %{count}","inclusion":"không có trong danh sách","invalid":"không hợp lệ","less_than":"phải nhỏ hơn %{count}","less_than_or_equal_to":"phải nhỏ hơn hoặc bằng %{count}","not_a_number":"không phải là số","not_an_integer":"phải là một số nguyên","odd":"phải là số lẻ","other_than":"cần phải khác %{count}","present":"cần phải để trắng","taken":"đã có","too_long":"quá dài (tối đa %{count} ký tự)","too_short":"quá ngắn (tối thiểu %{count} ký tự)","wrong_length":"độ dài không đúng (phải là %{count} ký tự)"},"template":{"body":"Có lỗi với các mục sau:","header":{"one":"1 lỗi ngăn không cho lưu %{model} này","other":"%{count} lỗi ngăn không cho lưu %{model} này"}}},"helpers":{"select":{"prompt":"Vui lòng chọn"},"submit":{"create":"Tạo %{model}","submit":"Lưu %{model}","update":"Cập nhật %{model}"}},"i18n":{"plural":{"keys":["other"],"rule":{}},"transliterate":{"rule":{"À":"A","Á":"A","Â":"A","Ã":"A","È":"E","É":"E","Ê":"E","Ì":"I","Í":"I","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ù":"U","Ú":"U","Ý":"Y","à":"a","á":"a","â":"a","ã":"a","è":"e","é":"e","ê":"e","ì":"i","í":"i","ò":"o","ó":"o","ô":"o","õ":"o","ù":"u","ú":"u","ý":"y","Ă":"A","ă":"a","Đ":"D","đ":"d","Ĩ":"I","ĩ":"i","Ũ":"U","ũ":"u","Ơ":"O","ơ":"o","Ư":"U","ư":"u","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y"}}},"import_schedules":{"create":{"head":"Danh sách các dòng bị lỗi","row":"Số dòng file excel","stt":"STT","success":"Đã cập nhật thành công"}},"import_users":{"create":{"success":"Đã cập nhật thành công"}},"layouts":{"application":{"name":"Quản lý đường bay"},"header":{"japanese":"日本語","login":"Đăng nhập","logout":"Đăng xuất","name":"FLIGHT MANAGEMENT","profile":"Hồ sơ","search":"Tìm kiếm","vietnamese":"Tiếng Việt"},"sidebar":{"actions":"Công việc","air_traffic_officer":"QL nv Không lưu","busy":"Bận","create_request":"Tạo yêu cầu","management_plane":"QL Đường bay","name":"ADMIN","offline":"Ẩn","online":"Hoạt động","pilot":"QL Phi Công","profile":"Thông tin cá nhân","schedules":"Lịch bay","settings":"Cài đặt","view_request":"Xem yêu cầu"}},"notifications":{"index":{"ago":"trước"}},"number":{"currency":{"format":{"delimiter":".","format":"%n %u","precision":0,"separator":",","significant":false,"strip_insignificant_zeros":false,"unit":"VNĐ"}},"format":{"delimiter":".","precision":3,"separator":",","significant":false,"strip_insignificant_zeros":false},"human":{"decimal_units":{"format":"%n %u","units":{"billion":"Tỷ","million":"Triệu","quadrillion":"Triệu tỷ","thousand":"Nghìn","trillion":"Nghìn tỷ","unit":""}},"format":{"delimiter":"","precision":1,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Byte"},"gb":"GB","kb":"KB","mb":"MB","tb":"TB"}}},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}}},"pilots":{"index":{"action":"Thao tác","button_submit":"Tải lên","button_text":"Tải dữ liệu Người dùng lên","email":"Email","name":"Họ và Tên","staff_code":"Mã nhân viên","sure":"Chắc chắn muốn xóa?","title":"QL phi công"}},"requests":{"alert":"Lấy dữ liệu thất bại","create":{"content":"Nội dung message","create_request_fail":"Tạo request thất bại.","create_request_success":"Tạo request thành công.","message_to_air_traffic":"Đã tạo một yêu cầu mới","notification_content":"Nội dung thông báo","notification_title":"Tiêu đề thông báo","title":"Tiêu đề message"},"index":{"actions":"Hành động","approve":"Chấp thuận","content":"Lý do","decline":"Từ chối","executed":"Đã xử lý","head":"Xem yêu cầu","id":"ID","pending":"Chờ xử lý","pilot_name":"Tên phi công","schedule_name":"Tên lịch bay","search":"Tìm kiếm"},"new":{"create_request":"Tạo yêu cầu","from":"Từ","pilot_name":"Tên phi công","plane_name":"Tên máy bay","reason":"Nội dung","runway":"Đường băng","schedule_id":"ID Lịch bay","schedule_name":"Tên lịch bay","submit":"Gửi","title":"Tiêu đề","to":"Đến"},"title_requests":{"absence":"Nghỉ","early":"Về sớm","late":"Đi muộn"},"update":{"message":"Đã xử lý yêu cầu của bạn","message_to_air_traffic":"Đã tạo một yêu cầu mới","success":"Xử lý thành công"}},"schedules":{"edit":{"doing":"Đang thực hiện","done":"Đã hoàn thành","edit":"Sửa lịch bay","from":"Từ","plane_code":"ID Máy bay","runway_id":"Đường băng","status":"Trạng thái","submit":"Chỉnh sửa","time":"Thời gian","title":"Chú thích","to":"Đến","user_code":"ID Nhân viên"},"find_schedule":{"noId":"Không tồn tại ID"},"index":{"btn_edit":"Sửa","button_submit":"Tải lên","button_text":"Tải dữ liệu lịch bay lên","delete":"Xoá","from":"Từ","plane_name":"Tên máy bay","run_way":"Đường băng","search":"Tìm kiếm","time":"Thời gian bay","title":"Lịch bay","to":"Đến"},"runwayable":{"dulicate":"đã sử dụng vui lòng đổi đường băng khác","id":"ID","id_runway":"Đường băng trống","name":"Tên","no_exist":"không tồn tại vui lòng đổi đường băng khác","runway":"Đường băng số"}},"sessions":{"create":{"invalid":"Email/Mật khẩu không hợp lệ."},"new":{"fogot_password":"Quên mật khẩu?","log_in":"Đăng nhập","password":"Mật khẩu","remember_me_content":"Ghi nhớ tôi","title_error_pass":"Mật khẩu phải từ 6 đến 20 ký tự","username":"Tên đăng nhập"}},"static_pages":{"home":{"welcome":"Xin chào !!"}},"support":{"array":{"last_word_connector":", và ","two_words_connector":" và ","words_connector":", "}},"time":{"am":"sáng","formats":{"default":"%a, %d %b %Y %H:%M:%S %z","long":"%d %B, %Y %H:%M","short":"%d %b %H:%M"},"pm":"chiều"},"users":{"destroy":{"deleted":"Đã xóa thành công"},"edit":{"button_text":"Sửa","email":"Email","name":"Họ và Tên","name_form":"Sửa thông tin Phi Công","staff_code":"Mã nhân viên","title":"Sửa thông tin"},"show":{"title":"Thông tin cá nhân"},"update":{"update_fail":"Cập nhật thất bại","updated":"Đã cập nhật thành công"}},"views":{"pagination":{"first":"« Đầu","last":"Cuối »","next":"Sau ›","previous":"‹ Trước"}}});
