var tipuesearch = {"pages": [{'title': 'About', 'text': '學號：40823114 \n 網站倉儲： https://github.com/40823114/cad2021_hw \n 網站連結： https://40823114.github.io/cad2021_hw/content/index.html \n', 'tags': '', 'url': 'About.html'}, {'title': 'TASK', 'text': '', 'tags': '', 'url': 'TASK.html'}, {'title': 'HWPages', 'text': '# 將資料存入 gist, 取其 url\nurl = "https://gist.githubusercontent.com/mdecourse/b11a88a98655d41055c47f08fe94788f/raw/8a27e6885ee1a5074bcf864d741679afeac796c4/2b_w2_stud_list.txt"\n# 利用 open() 開啟 url 後, 以 readlines() 讀取後可納入數列\ndata = open(url).readlines()\n# 檢查資料筆數, 第一筆為 title\n#print(data)\n#print(len(data))\ndata = data[1:]\n#print(data)\nfor i in range(len(data)):\n    num_github = data[i] \n    num = num_github.split("\\t")[0]\n    account = num_github.split("\\t")[1]\n    if account == "":\n        account = num\n    print("<a href=\'https://" + str(account) + ".github.io/cad2021_hw\'>"+ str(num) + "</a>") \n \n \n 網站 40723126  倉儲 40723126 \n 網站 40723135  倉儲 40723135 \n 網站 40723217  倉儲 40723217 \n 網站 40732331  倉儲 40732331 \n 網站 40823114  倉儲 40823114 \n 網站 40823115  倉儲 40823115 \n 網站 40823117  倉儲 40823117 \n 網站 40823119  倉儲 40823119 \n 網站 40823122  倉儲 40823122 \n 網站 40823127  倉儲 40823127 \n 網站 40823146  倉儲 40823146 \n 網站 40823148  倉儲 40823148 \n 網站 40823215  倉儲 40823215 \n 網站 40871106  倉儲 40871106 \n 網站 40923201  倉儲 40923201 \n 網站 40923203  倉儲 40923203 \n 網站 40923204  倉儲 40923204 \n 網站 40923205  倉儲 40923205 \n 網站 40923206  倉儲 40923206 \n 網站 40923207  倉儲 40923207 \n 網站 40923208  倉儲 40923208 \n 網站 40923209  倉儲 40923209 \n 網站 40923210  倉儲 40923210 \n 網站 40923211  倉儲 40923211 \n 網站 40923212  倉儲 40923212 \n 網站 40923213  倉儲 40923213 \n 網站 40923214  倉儲 40923214 \n 網站 40923216  倉儲 40923216 \n 網站 40923217  倉儲 40923217 \n 網站 40923218  倉儲 40923218 \n 網站 40923219  倉儲 40923219 \n 網站 40923220  倉儲 40923220 \n 網站 40923221  倉儲 40923221 \n 網站 40923223  倉儲 40923223 \n 網站 40923224  倉儲 40923224 \n 網站 40923225  倉儲 40923225 \n 網站 40923226  倉儲 40923226 \n 網站 40923227  倉儲 40923227 \n 網站 40923228  倉儲 40923228 \n 網站 40923229  倉儲 40923229 \n 網站 40923230  倉儲 40923230 \n 網站 40923231  倉儲 40923231 \n 網站 40923232  倉儲 40923232 \n 網站 40923233  倉儲 40923233 \n 網站 40923234  倉儲 40923234 \n 網站 40923235  倉儲 40923235 \n 網站 40923236  倉儲 40923236 \n 網站 40923237  倉儲 40923237 \n 網站 40923238  倉儲 40923238 \n 網站 40923239  倉儲 40923239 \n 網站 40923240  倉儲 40923240 \n 網站 40923241  倉儲 40923241 \n 網站 40923242  倉儲 40923242 \n 網站 40923243  倉儲 40923243 \n 網站 40923244  倉儲 40923244 \n 網站 40923245  倉儲 40923245 \n 網站 40923246  倉儲 40923246 \n 網站 40923247  倉儲 40923247 \n 網站 40923248  倉儲 40923248 \n 網站 40923249  倉儲 40923249 \n 網站 40923250  倉儲 40923250 \n 網站 40923251  倉儲 40923251 \n 網站 40923252  倉儲 40923252 \n 網站 40923253  倉儲 40923253 \n 網站 40971220  倉儲 40971220 \n 網站 40971227  倉儲 40971227 \n \n', 'tags': '', 'url': 'HWPages.html'}, {'title': 'HW1', 'text': 'HW1 佔學期成績 25% \n HW1 必須在 2021.11.10 22:00 之前完成. \n HW1 具體項目成果回報區 將於 2021.09.23 開啟, 於 \xa0 2021.11.10 22:00 關閉. \n 作業一: meArm Robot 零件繪圖與機電運動模擬場景製作 \n Step1 : 下載 \xa0 meARM.7z \xa0 這個包含尚未完成組立的 meArm Robot 場景與雷射切割零件組立手冊. \n meArm_75-0040_v1.pdf \xa0 則是另外一本組立參考手冊. \n Step2 : 從課程網頁中的 \xa0 Compile CoppeliaSim 頁面 , 下載 \xa0 coppeliaSim 4.1.0 官方版與 MSYS2 編譯版.7z \xa0 (檔案大小 412 MB, 解開壓縮後 1GB) 可攜套件. \n Step3 : 在 HW1 中, 要求每一位學員透過程式亂數分配 (兩班實際亂數分配結果以上課時點擊下列按鈕所得結果為準) 所使用的兩套參數式 CAD 套件, 從軟體發展緣起開始進行介紹,\xa0 經過教育版軟體套件檔案的取得, 下載安裝以及配置使用. 根據 Step1 中的零件尺寸, 逐一完成 meArm Robot 各零件繪製與組立. 並將零件 匯入 \xa0 CoppeliaSim 進行組裝配置後, 以 \xa0 UI 介面 中的 slider 控制 meArm Robot 各軸的旋轉作動. \n 2b CAD 套件分配結果: \xa0 https://mde.tw/cad2021/downloads/online/2b_hw1_cad.txt \n 附件: \n 1. CAD 套件分配表: \n sw: Solidworks, inv: Inventor, nx: NX12, ons: Onshape, slvs: Solvespace \n 2a 套件亂數分配結果 \n 2b 套件亂數分配結果 \n 2. 在兩套 CAD 完成零件繪圖並轉入 CoppeliaSim 後, 為了建立 Dynamic Model 必須利用 \xa0 shape edit modes \xa0 轉為 \xa0 clean model , 並與實際轉入的 STL 格式零件外形結合應用後建立模擬場景 (scenes). \n 3. meARM Robot \xa0 動態模擬場景 的建構, 可參考 \xa0 0 , \xa0 1 , \xa0 2 , \xa0 3 , \xa0 4 , \xa0 5 , \xa0 6 , \xa0 7 , 也可參考 \xa0 Uarm Robot model \xa0 與相關 影片 . \n 4. CoppeliaSim design dynamic simulations \xa0 說明頁面 . \n 5. \xa0 網際 Lua \xa0 程式執行. \n 6. \xa0 meArm.slvs , \xa0 meArm_in_solvespace.slvs \n 7. UI 介面程式參考: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n 41 \n 42 \n 43 \n 44 \n 45 \n 46 \n 47 \n 48 \n 49 \n 50 \n 51 \n 52 \n 53 \n 54 \n 55 \n 56 \n 57 \n 58 \n \n \n \n function   closeEventHandler(h) \n \xa0\xa0\xa0\xa0 sim.addLog(sim.verbosity_scriptinfos, \'Window \' ..h.. \' is closing...\' ) \n \xa0\xa0\xa0\xa0 simUI.hide(h) \n end \n \xa0 \n function   joint1_rotate(ui,id,newVal) \n \xa0\xa0\xa0\xa0 simUI.setLabelText(ui,3000, \'theta1 set to \' ..newVal) \n \xa0\xa0\xa0\xa0 sim.setJointTargetPosition(joint1, newVal*deg) \n end \n \xa0 \n function   joint2_rotate(ui,id,newVal) \n \xa0\xa0\xa0\xa0 simUI.setLabelText(ui,3000, \'theta2 set to \' ..newVal) \n \xa0\xa0\xa0\xa0 sim.setJointTargetPosition(joint2, newVal*deg) \n end \n \xa0 \n function   joint3_rotate(ui,id,newVal) \n \xa0\xa0\xa0\xa0 simUI.setLabelText(ui,3000, \'theta3 set to \' ..newVal) \n \xa0\xa0\xa0\xa0 sim.setJointTargetPosition(joint3, newVal*deg) \n end \n \xa0 \n function   joint16_rotate(ui,id,newVal) \n \xa0\xa0\xa0\xa0 simUI.setLabelText(ui,3000, \'theta16 set to \' ..newVal) \n \xa0\xa0\xa0\xa0 sim.setJointTargetPosition(joint16, newVal*deg) \n \xa0\xa0\xa0\xa0 sim.setJointTargetPosition(joint20, -newVal*deg) \n end \n \xa0 \n function   sysCall_init() \n \xa0\xa0\xa0\xa0 -- do some initialization here \n \xa0\xa0\xa0\xa0 joint1 = sim.getObjectHandle( \'motor1\' ) \n \xa0\xa0\xa0\xa0 joint2 = sim.getObjectHandle( \'motor2\' ) \n \xa0\xa0\xa0\xa0 joint3 = sim.getObjectHandle( \'motor3\' ) \n \xa0\xa0\xa0\xa0 joint16 = sim.getObjectHandle( \'motor16\' ) \n \xa0\xa0\xa0\xa0 joint20 = sim.getObjectHandle( \'motor20\' ) \n \xa0\xa0\xa0\xa0 i = 0 \n \xa0\xa0\xa0\xa0 deg =  math.pi /180 \n \xa0\xa0\xa0\xa0 print (i) \n \xa0\xa0\xa0\xa0 xml = [[ \n <ui closeable= "true"   on-close= "closeEventHandler"   resizable= "true" > \n \xa0\xa0\xa0\xa0 <label text= "This is a demo of the CustomUI plugin. Browse through the tabs below to explore all the widgets that can be created with the plugin."   wordwrap= "true"   /> \n \xa0\xa0\xa0\xa0 <tabs> \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 <tab title= "Numeric" >a \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 <label text= "Sliders can be oriented horizontally or vertically, and have optional properties that can be set (in the XML) such as minimum and maximum value."   wordwrap= "true"   /> \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 <label text= ""   id= "3000"   wordwrap= "true"   /> \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 <label text= "theta1"   /> <hslider tick-position= "above"   tick-interval= "1" \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 minimum= "0"   maximum= "360"   on-change= "joint1_rotate"   /> \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 <label text= "theta2"   /> <hslider tick-position= "above"   tick-interval= "1" \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 minimum= "-90"   maximum= "65"   on-change= "joint2_rotate"   /> \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 <label text= "theta3"   /> <hslider tick-position= "above"   tick-interval= "1" \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 minimum= "-90"   maximum= "185"   on-change= "joint3_rotate"   /> \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 <label text= "theta16"   /> <hslider tick-position= "above"   tick-interval= "1" \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 minimum= "0"   maximum= "15"   on-change= "joint16_rotate"   /> \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 </tab> \n \xa0\xa0\xa0\xa0 </tabs> \n </ui> \n ]] \n \xa0\xa0\xa0\xa0 ui=simUI.create(xml) \n \xa0\xa0\xa0\xa0 \xa0 \n end \n \n \n \n \n \n \n \n \n (From: \xa0 2016_ADDITIVE MANUFACTURING PROCESSES FOR FABRICATING A MINI ROBOT - COMPUTATIONAL MODELS AND EXPERIMENTAL RESULTS.pdf ) \n \n \n', 'tags': '', 'url': 'HW1.html'}, {'title': 'CAD1 繪圖', 'text': 'CAD1 指各學員所分配到的第一套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n CAD1 緣起說明與介紹 \n 請不要直接從找到的 CAD1 套件說明複製貼上, 而是應該要看完各種參考資料後, 重新打字彙整. \n', 'tags': '', 'url': 'CAD1 繪圖.html'}, {'title': 'CAD1 安裝配置', 'text': 'CAD1 指各學員所分配到的第一套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n CAD1 套件下載安裝與配置 \n CAD1 下載安裝與配置流程 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020 下載安裝與配置 」且加上 語音說明 與 字幕. \n 若使用 Solidworks 2017 版, 則將 SW2020 換為 SW2017, 其他套件 INV2020 代表 AutoDesk Inventor 2020 版, 還有 Onshape 與 Solvespace 等套件名稱. \n 由於安裝配置 Solidworks 時必須使用 nfu 的 vpn, 因此各學員必須按照 說明 , 完成本學期的 vpn 使用申請. \n Solidworks 分別提供 2017 與 2020 版本: \n SW2017 Professional 安裝光碟下載 \xa0 (必須先登入 @gm 帳號後才能下載) \n SW2020 Professional 安裝光碟下載 \xa0 (必須先登入 @gm 帳號後才能下載) \n NX12 版本: \n NX12 安裝光碟下載 \xa0 (必須先登入 @gm 帳號後才能下載) \n NX12 可攜版本下載 \xa0(必須先登入 @gm 帳號後才能下載) \n Inventor: \n 請在校園網路, 使用 nfu vpn 或設定系上代理主機, 就可以從 \xa0 https://2019wcm.blogspot.com/2019/07/autodesk-inventor-professional.html \xa0 嘗試下載 autodesk.iso 後安裝 Inventor Professional 版本. \n Onshape: \n 至 \xa0 https://www.onshape.com/en/ \xa0 申請帳號後使用. \n Solvespace: \n 至 \xa0 https://solvespace.com \xa0 下載或從 \xa0 https://github.com/solvespace/solvespace \xa0 下載原始碼, 以可攜程式系統自行編譯後使用. \n', 'tags': '', 'url': 'CAD1 安裝配置.html'}, {'title': 'CAD1 操作流程', 'text': 'CAD1 指各學員所分配到的第一套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n CAD1 零組件繪圖操作流程影片 (Youtube) \n CAD1 零組件繪圖教學影片 (Wink) \n CAD1 零組件繪圖教學影片 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020 \xa0 零組件繪圖教學影片」且加上 語音說明 與 字幕. \n 若使用 Solidworks 2017 版, 則將 SW2020 換為 SW2017, 其他套件 INV2020 代表 AutoDesk Inventor 2020 版, 還有 Onshape 與 Solvespace 等套件名稱. \n', 'tags': '', 'url': 'CAD1 操作流程.html'}, {'title': 'CAD2 繪圖', 'text': 'CAD2 指各學員所分配到的第二套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n CAD2 緣起說明與介紹 \n 請不要直接從找到的 CAD2 套件說明複製貼上, 而是應該要看完各種參考資料後, 重新打字彙整. \n', 'tags': '', 'url': 'CAD2 繪圖.html'}, {'title': 'CAD2 安裝配置', 'text': 'CAD2 指各學員所分配到的第二套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n CAD2 套件下載安裝與配置 \n CAD2 套件下載安裝與配置影片 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020 \xa0 套件下載安裝與配置影片」且加上 語音說明 與 字幕. \n 若使用 Solidworks 2017 版, 則將 SW2020 換為 SW2017, 其他套件 INV2020 代表 AutoDesk Inventor 2020 版, 還有 Onshape 與 Solvespace 等套件名稱. \n', 'tags': '', 'url': 'CAD2 安裝配置.html'}, {'title': 'CAD2 操作流程', 'text': 'CAD2 指各學員所分配到的第二套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n CAD2 零組件繪圖操作流程影片 (Youtube) \n CAD2 零組件繪圖教學影片 (Wink) \n CAD2 零組件繪圖教學影片 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020 \xa0 零組件繪圖教學影片」且加上 語音說明 與 字幕. \n 若使用 Solidworks 2017 版, 則將 SW2020 換為 SW2017, 其他套件 INV2020 代表 AutoDesk Inventor 2020 版, 還有 Onshape 與 Solvespace 等套件名稱. \n', 'tags': '', 'url': 'CAD2 操作流程.html'}, {'title': 'HW1-1', 'text': 'HW1-1 佔學期成績 15% \n HW1-1 必須在 2021.12.01 22:00 之前完成. \n HW1-1 具體項目成果回報區 將於 2021.11.18 開啟, 於 \xa0 2021.12.01 22:00 關閉. \n 作業 1-1: Mirobot 機械手臂場景組合 \n 說明: meArm Robot 有四個自由度, 請根據 HW1 的零組件繪製組立與 CoppeliaSim 運動場景模擬, 延伸至 \xa0 Task1-1 \xa0 中六個自由度的 Mirobot 機械手臂. \n mirobot_part1_to_part5.7z \xa0 為取自 \xa0 https://github.com/wlkata/Mirobot-STL \xa0 的參考零件. 請利用場景中 Mirobot STL 零件, 組合為可以透過 \xa0 UI 介面 中的 slider 控制各軸作動旋轉的運動模型. \n 請根據 \xa0 Task1-1 \xa0 中的說明, 完成各項指定任務. \n', 'tags': '', 'url': 'HW1-1.html'}, {'title': 'HW2', 'text': 'HW2 佔學期成績 20% \n HW2 必須在 2021.12.22 22:00 之前完成. \n HW2 具體項目成果回報區 將於 2021.12.09 開啟, 於 \xa0 2021.12.22 22:00 關閉. \n meArm 逆向運動學與網際參數式 CAD API 結合應用. \n 請將 \xa0 https://github.com/mdecourse/meArm \xa0 中的 meArm Robot 逆向運動學程式, 改為 Lua 與 Python 程式, 使能套用至 HW1 所完成的 CoppeliaSim meArm 運動模擬場景. 並分別採 Lua, Legacy remote API 及 Bluezero remote API 逆向運動的方式進行控制. \n 請利用 \xa0 Task2 \xa0 中的 Solidworks, Inventor 與 NX API 程式控制 meArm Robot 零組件尺寸, 說明並討論如何透過網際程式控制 meArm Robot 的零件尺寸, 並結合上述逆向運動學程式庫, 使得自動化機電產品開發流程更容易滿足客製化需求. \n 參考: \n 2016_ADDITIVE MANUFACTURING PROCESSES FOR FABRICATING A MINI ROBOT - COMPUTATIONAL MODELS AND EXPERIMENTAL RESULTS.pdf \n Robot Manipulator Control with Inverse Kinematics PD-Pseudoinverse Jacobian and Forward Kinematics Denavit Hartenber.pdf \n KINEMATIC ANALYSIS FOR ROBOT ARM.pdf \n https://codebender.cc/user/MeArm \n https://github.com/mdecourse/meArmPi \n /downloads/MeArmPiTechnicalOverviewV0-3DRAFT.pdf \n https://github.com/mdecourse/me-arm-ik \n https://github.com/mdecourse/mearm_model \n https://courses.ece.cornell.edu/ece5990/ECE5725_Fall2016_Projects/pas324_ml634/index.html \n https://github.com/mdecourse/InefficientSkittleSorter \n https://mearm.com \n', 'tags': '', 'url': 'HW2.html'}, {'title': 'HW3', 'text': 'HW3 為選項作業. \n HW3 具體項目成果回報區 將於 2021.12.09 開啟, 於 \xa0 2022.01.05 22:00 關閉 \n https://mde.tw/cad2021/content/Task3.html \xa0 \n https://mde.tw/cad2021/content/Task4.html \n https://mde.tw/cad2021/content/Task5.html \n https://mde.tw/cad2021/content/Task6.html \n https://mde.tw/cad2021/content/Task7.html \n 請從上列 Tasks 中自行選擇項目內容完成 HW3. \n', 'tags': '', 'url': 'HW3.html'}, {'title': 'Final Project', 'text': 'Final Project 佔學期成績 40% \n 2a 與 2b 必須在 2022.01.06 上課之前完成 Final Project \n Final Project 具體項目成果回報區 將於 2021.12.09 開啟, 於 \xa0 2022.01.05 22:00 關閉 \n 彈性製造系統場景設計與製作 \n 請從 \xa0 https://github.com/mdecourse/scenes \xa0 與 \xa0 https://github.com/mdecourse/models \xa0 中選擇場景或模型, 配合 \xa0 cad2021_textbook.pdf \xa0 (登入 @gm 帳號後下載) 教材中的內容, 自選製作與組立產品, 組合成一個 Flexible Manufacturing System 系統場景. \n 彈性製造系統內容說明 \n 範例: \n \n', 'tags': '', 'url': 'Final Project.html'}]};