import "./styles/story.css";
import Navbar from "./components/Navbar.js";
import Footer from "./components/footer.js";
import React from "react";
import HTMLFlipBook from "react-pageflip";

function Story() {
  return (
    <div className="App">
      <div className="main">
        <Navbar />
      </div>
      <div className="story">
        <HTMLFlipBook
          width={430}
          height={630}
          size={"stretch"}
          maxWidth={430}
          maxHeight={630}
          minWidth={400}
          minHeight={650}
          showCover={true}
          className="storybook"
        >
          <div className="page cover">
            <p>
              魔王奧古斯與女神優比特 <br />
              By Edward Chan
            </p>
          </div>
          <div className="page">
            <div className="pagecontent">
              序章 <br />
              傳說大約1800個史前年，海水的退卻和下降使大陸地形從海面上浮現，世界上還沒有出現任何動植物甚至是人類等智慧生物。 光明殿是一個在天上懸浮的城郭，它是所有神族人的居住地。隨著大陸上不斷有火山噴發和泉湧地震等，沖天的火山灰和水柱影響到在天上的生活的神族人。於是光明殿內的五大神族（天神，地神，妊娠神，死亡神，智慧神）便召開了以此神族會議，決定向地面派來了一位使者，她的名字叫做“涅比雅·卡娜”。 涅比雅是一位長期伺候於光明殿內神族人的女僕和祭司，她的主人是掌管生命的妊娠神優比特。心地善良和廣博，豐富和知書識大體的修養使她得到了眾神的喜愛，因此獲得了長期侍奉於神族人旁邊的資格。這次受命於主人妊娠神的指派，目的是要向大陸上灑下生命的種子。 來到地面的之後，涅比雅做了幾件事： 第一日，她在大陸中央播下了生命樹的種子。 第二日，她創造了森林和湖泊...... 第三天，她劃分了河流和山脈的邊界，然後在海洋裡撒了下魚和其他生物的種子。 第四天，她用神力壓制和停止了地面上眾多火山的噴發和泉湧地震，使這些活火山一座一座地被壓扁變成普通的平地和平原...... 到了第五天她感到很累！可能是因為她使用了過多的神力去改變地形，令到她想要回去天上稍作休息。 “你怎麼回來了？”妊娠神走了進來，如是詫異地問。 “對不起，我的主人（懶洋洋地起床）因為這幾天實在太累了，請允許涅比雅稍微再睡多一會......”
              <p>1</p>
            </div>
          </div>
          <div className="page">
            <div className="pagecontent">
              “不行（勃然大怒地打斷）！這可是你的工作。” “可是涅比雅我做不到啊！”涅比雅解釋道。 “因為眾神們已經決定好了，涅比雅你必須在七天之內完成你的任務！”妊娠神如是說。 “但是地圖上還有如此之多的缺陷需要修正和處理，而且我的精力有限，涅比雅我感到頭腦都要爆炸 了......” “這不是你狡辯的理由！” 妊娠神的樣子似乎很生氣，但她仍然吐了口氣，坐到了涅比雅的床邊。 “卡娜啊，你要明白，這也我對你的一番苦心和希冀——“ 涅比雅頓時流露出一副不太理解的樣子。 “只要你在七天之內將這項眾神委派給你的工作和任務完成的話，我保證，那麼你就能永遠伺候在我的身邊左右，到時候只要升格成為神族人的使者，那麼眾神自然也會對你刮目相看.......” “但是，偉大的優比特，我.......” “無需多言了！” 被自己的主人拒絕後，涅比雅只得拖拉著比較疲憊的身體，再次從光明殿外圍的“地之門”通過。 “你還要繼續到下面去嗎？” “？”涅比雅頭上豎起了一個問號抬頭四處張望。 “原來是你啊，奧古斯·汀！” 看著守護“地之門”的門衛奧古斯，她卻突然間有了精神並感到了些欣慰。 “我們是最要好的青梅竹馬，不是嗎？” 她覺得奧古斯·汀的眼神似乎是會跟自己直接交流似的。 她還記得，自己從小時候，就已經喜歡上了對方這種時刻地無微不至。 “到了地面之後可別忘了給我帶些樹的種子。” “又要當手信嗎......哎！你怎麼知道我在下面做了些什麼？”涅比雅驚訝地看著他。
              <p>2</p>
            </div>
          </div>
          <div className="page">
            <div className="pagecontent">
              “我可是你肚子裡的蛔蟲！”奧古斯微笑。 鼓起著腮幫生氣的涅比雅，很快就從奧古斯的面前通過。 “我一定會的~~” 心裡懷揣著如此高興的心情，她很快就又來到了她第一次種下生命樹種子的地方。 “居然長這麼大了啊？！” 正所謂天上一日，地下一年。更何況她已經離開了這裡（播下生命樹種子的地方）已經有四天的時間。 生命樹已經長成了一棵比較大的樹木叢，面積大約有光明殿的最高神議院那樣的規模（佔地約1.5平方公里左右），從她的高度看來，目測足足有300米那麼高！ “真的好高啊！” 慨歎完之後，涅比雅又得上路去完成她手頭上的工作。 “不如就在這裡弄一座山吧？” 在來到了大陸西邊的一片只有藍色汪洋大海的海面上後，涅比雅突然想到了一個餿主意。 她用神力強行從海底里釜底抽薪地隆起了一大片的黑漆漆的海底泥土，遺憾的是她並沒有注意把控好自己的力度。 “糟糕了糟糕了！！” 後人把這個被她惡作劇般地隆起的醜陋外表的通篇黑色的尖銳棱角的山脈命名為“通古斯山脈“。 “這下回去會被主人罵的！！！“ 隨後她對自己的這個爛尾的作品感到很不滿意！竟又飛向了東邊的海上做了同樣的蠢事。 “怎麼又是黑茫茫的啊？！！” 於是西邊的山脈被她隨意地灑下了一些飛龍的種子後，她就離開了（飛龍山）。 “老娘我就不信邪！” 跟自己較勁的神靈我還是第一次見。 很快地，她便得到了自己終於想要見到的結果。 “呼！終於完成啦~~~” 在南邊的海岸上，
              <p>3</p>
            </div>
          </div>
          <div className="page">
            <div className="pagecontent">
              她很滿意自己只是用了一丁點的神力（前兩次其實她都沒把控好），就已經創造出了自己喜歡的島嶼作品。 這次她確實沒有做出糞作和爛尾！ “不如就在這裡完成我的任務？” 靈機一動，她在最後的這片比較大的島陸上面撒下了很多花花草草啊樹木啊等動植物的種子...... 於是乎，後人把這片陸地作為大陸生命的起源，並將它命名其為“克塞爾島”。 “太好了！這下我終於可以交差了~~” 到了第六天，涅比雅對自己的工作完成度仿佛相當滿意。 “還差些什麼呢？” 涅比雅仔細一想，千算萬算，終究還是算到漏了一樣東西。 “啊——對了！還有氣候和四季......” 確定不是還差了一些東西麼？？？ “要不......把我自己也捏一個！” 接著，她隨意地按著自己的面孔，按出來了一個像是泥人一般的東西。 “太醜了......” 隨後她一個接一個地，一個接一個地...... 竟在最後一天弄出了幾十個臉孔都不一樣的類似於手辦Figure的人偶泥公仔！ “好！給他們一點精神~~“ 奇思妙想地使用了一招神力魔法後，這些被她弄出來的人偶公仔卻奇跡般地都自己動了起來！ “呼哇（打哈欠），真的好累~~” 氣候，四季，人偶，天時地利等種種元素，全部都一應俱全。 “終於可以休息了。” 她打算暫時離開地面一會兒（結果去了很久），回到光明殿給妊娠神先寫一份報告。 可她沒有意識到，自己已經鑄下了大錯......
              <p>4</p>
            </div>
          </div>
          <div className="page">
            <div className="pagecontent">
              “你睡醒了沒有？” “嗯.......”涅比雅揉了揉眼睛。 “快起來。” 剛剛起床，涅比雅就聽到了一道聲音不停催促她。 “啊，是小汀你啊......“ “噓（豎起食指）！！！在這裡別亂叫我的小名！” 奧古斯馬上搖了搖頭，生怕這個睡眼惺忪的丫頭再次壞事。 “你這幾天都幹什麼去了？” “嗯（繼續揉眼）......這幾天啊，我......” 仿佛是意識到了一件大事發生！ “啊啊啊！！我啊，那個，就是那個那個啊啊啊——” “你別急啊！” 奧古斯立即一記手刀揮了下去。 “痛！！痛啦......” 看來奧古斯的手刀還是很有效的，打得涅比雅一下子連忙抱頭痛哭。 “天靈蓋是真的硬，可就是腦子不太好使。” “只有奧古斯你才會欺負我！”涅比雅生氣地鼓著臉。 “不和你嘮叨，你已經睡了很長時間了你知道嗎？” 忽然一本正經起來的奧古斯才真正地引起了涅比雅的正襟危坐。 “啊！對了，就是啊，我跟你說哦，我弄了些生命的種子給你。” “生命種子？” 不等奧古斯一臉疑惑的遲疑，涅比雅便一隻手拉起對方的手心翻轉了過去。 “來！這是給你的哦！” “這......” 奧古斯的手心上就這樣被她硬塞了一把生命的種子進去。 “這可是我在地面上種下的，是我從主人妊娠神那裡得到的獎賞。” “這個獎賞......莫非你？” “嗯（涅比雅高興地點頭），就是人類的種子！” “你已經闖禍了！！！” 雖然只是身為一介的門衛，但是奧古斯卻立即察覺到了一股不對勁。“你知道天神殿是有規定的
              <p>5</p>
            </div>
          </div>
          <div className="page">  
            <div className="pagecontent">
            ：凡是神族人，尤其是眾神的賞賜，是絕對不可以隨便亂用......” “可我也沒想過給你後，會有用得著的地方啊！” “問題是你已經私自使用了！” 涅比雅立即神情恍惚地看著對方的吃驚。 “而且還是在地面使用，況且這些種子可全都是人類.....” “即便是人類又怎麼了？“涅比雅遲疑道。 “沒那麼簡單！你知道神族人是靠人類的供奉而存在的嗎？” “人類的供奉.....你的意思是？” “就是這麼回事！” 他們倆頓時明白，自己都是在想著同一件事。 “以下犯上，欺瞞神族，罪加一等！你和我現在都是共犯了！””奧古斯斬釘截鐵地說到。 “那......那我們該怎麼辦？“涅比雅流露出慌張地說。 “時候尚早！趁著這個機會，快去向妊娠神大人稟告......” ——沒這個必要了！ 還沒等奧古斯說完，一隊手持木杖和棍棒的成年人闖進了涅比雅的住處。 “竟然是.....祭司長老？”涅比雅表露出一臉的震驚。 “卡娜·涅比雅，還有奧古斯·汀，你們二人同時觸犯了光明殿內的禁令！現在要將你們送去審議院接受眾神審判......”“眾神......要審判我們？”涅比雅難以置信地說道。 “就因為我們倆是人類嗎！？”奧古斯汀忍不住地反駁。 “放肆！你只是一個門衛，安敢教唆神使犯事，來人——” 說時遲，那時快。 “我不服！我和涅比雅到底是犯了哪條天條！？”奧古斯一邊掙扎著地反問。 “到了審議院，你們自然就會知道。”隨著一聲令下，涅比雅和奧古斯被神族衛兵們帶走出去了住處。
              <p>6</p>
            </div>
          </div>
          <div className="page">
            <div className="pagecontent">
              第二章 <br />
             （光明殿·眾神審議院下） 圍繞住大殿的正方形審判台上面的，是所有正襟危坐著的神族各族的長老和神使，包括坐在正中間的五大神位。 “天神......死神......智慧神......地神，還有......” 涅比雅看著這史無前例的盛況，數到了坐在最右邊的席位上的主人。 “妊娠神，這可是你們優比特族內部的問題。”其他神靈提醒道。 “是的.......” 雖然涅比雅明顯看得出來妊娠神是不情不願，不過奧古斯卻對正面的這些所謂神靈嗤笑。 “大膽奧古斯！汝已成階下之囚，豈敢嘲笑判官們！” “有什麼大不了嗎？” 奧古斯打從心底裡就瞧不起這幫神族人。 “我和涅比雅都是你們從地面上擄來的人類罷了！” “你......” “別忘了，我的父母都是被你們淹死的！” “那可是禁忌！” 審議院內立即一片嘩然。 ”我永遠都不會忘記，你們神族人向我們的世界施以洪水的懲罰！” “這是我們所有神靈的一致決斷！” “那涅比雅的父母就該死嗎！？” 涅比雅默不作聲，她只是覺得站在她面前的奧古斯仿佛變成了另一個人。 “你們這些所謂的神，本來就是因為我們人類的祈禱而誕生。但是你們卻因為我們的世界逐漸威脅到神族的安寧，竟然毫無保留地向所有人施以滔天洪水，要不是因為涅比雅的父母提前知道了你們的計劃，我和涅比雅早就已經死在了往方舟的路上......” “放肆！快給我閉嘴——”祭司長老氣急敗壞地喊道。 “涅比雅的父母同樣是被你們審判之後處死的!
              <p>7</p>
            </div>
          </div>
          <div className="page">
            <div className="pagecontent">
              罪大惡極的應該是你們，因為你們都知道她是諾亞一族的後代！” “閉嘴——” “我說的句句都是真話！你們五個（奧古斯指向五位神靈的坐席）都是共同謀殺了涅比雅父母的兇手！” 涅比雅沒有說話，她的心情已經變得既紊亂，又非常矛盾。 “夠了——” 涅比雅那蕩氣迴腸的聲音，徹底嚮遍了整個審議院會堂。 “小汀，真的很感謝你......”涅比雅哭著哀求道。 “卡娜？”奧古斯轉頭望著這位可憐的少女。 “我的名字——不！我全都想起來了......” 涅比雅昂首挺胸地抬起了頭來，目光註視著審判台上的所有神靈和族人叫道。 “我就是涅比雅·諾亞！父親是諾亞一族的人類，也就是方舟的創造者——” “——大逆不道！” 長老再次氣急敗壞地喊道。 “母親她是神族人：卡娜·優比特。” “反了——” 人類和神族人苟合，在神族人看來簡直是不可饒恕的事情。 “父親他明明救了地面上許多人，但是你們......你們所有神靈卻袖手旁觀！我們每天都在祈禱，可你們卻任由大雨下了足足三百多天！直到洪水來臨的那一刻，父親他仍然在拯救著地面上的災民......“ “卡娜，夠了，別再說下去了——”奧古斯猛然提醒她。 “——不！我還是要說！因為母親她本來就是優比特族的妊娠神！” 聽到涅比雅的這句話，座位上的妊娠神悲傷地唸出了那個稱呼。 “姐姐.......” 接著，涅比雅不慌不忙地正氣凜然道。 “父親和母親都沒有做錯！他們兩個都是彼此真心相愛，而你們卻因為神和人不能夠結合,
              <p>8</p>
            </div>
          </div>
          <div className="page">
            <div className="pagecontent">
            不但狠心地將他們分道揚鑣，而且還利用你們神族的標準去判決了一對原本拯救過萬民於水火的鴛鴦情侶。” “反啦！真是反啦！” 長老氣急敗壞X3。 “這是真正的誤殺以及謀殺！” 一口氣說完後，涅比雅從來沒體會過像這次一樣勇敢地直面真理和死亡。 ”反了！快把這對狗男女給我押下去——”長老氣急敗壞N次。 “切！” 嗤之以鼻地怒目環繞了眾神一周後，奧古斯便被台上的衛兵們帶走。 “奧古斯，是我害了你......” “放心，一定會沒事的。” 話雖如此，他們倆彼此的約定卻永遠沒有得到現實的妥協。
              <p>9</p>
            </div>
          </div>
          <div className="page">
            <div className="pagecontent">
              第三章<br />
              （神獄·第十八層） “奧古斯·汀，現在神族宣佈決定對你的驅逐和流放的判決。” “什，什麼？” 奧古斯一度以為是自己的耳朵聽錯了。 “眾神的裁決下來了，這是對你的最終判決結果！” “不可能！” 奧古斯打從內心一開始不能夠接受。 ”涅比雅......涅比雅呢！涅比雅她究竟如何了？！” “這些都與你無關。” 天神突然間從後邊走了上來。 “身為諾亞一族的涅比雅她將會受到應得的懲罰。”天神如此蔑視道。 “怎麼會......” ”倒是你，不要把自己看得那麼重。” “什麼？“ 奧古斯一瞬間聽不明白天神的意思。 “只不過是區區一介人類，卻妄想與神族人和涅比雅的父母扯上關係。” 天神的意思很明白，而且語氣也很刺耳。 “你要記著，在光明殿裡，和神族人的祭司神使，更可況是諾亞一族的後人扯上關係，都不是什麼值得耀武揚威和為自己爭取脫罪的好方法和機會。” “你想說什麼？“奧古斯氣急敗壞地握著牢獄的柱子說道。 “說到底，你只不過是卑賤的人類！而且還是一個在這裡毫無作用的門衛而已。” “可惡！” 天神留下這一番話離開之後，奧古斯慢慢地睜開了眼睛怒目而視道。 “可惡，為什麼......” 從內心湧起著的恨意和殺意，使他開始對自己的父母，乃至對自己的出生成為人類的身份流露出強烈的不滿和憎恨。 ”我厭惡神，更加厭惡人類！” 他最厭惡的其實是他自己。 “走著瞧吧！就算是弒神,
              <p>10</p>
            </div>
          </div>
          <div className="page">
            <div className="pagecontent">
              我也要親手全部殺光！” 他的這種恨意無以復加到了無可挽救的地步。 “你恨人類嗎？” “恨！” “你最憎恨的其實是你自己對吧？” 一段文字性的描述不斷縈繞在奧古斯的腦海當中。 “你最心愛的青梅竹馬也背叛了你” “不是這樣的！ “承認吧！她和神族都是同一路人。” “是的，沒錯。“ 奧古斯完全接受了這段無名召喚的聲音。 “那我們就是同一路人了。” “Yes！的確是這樣。” 奧古斯如此碎碎唸道。 隨後，一股鬼怪的旋風，從他腳下到身上盤懸著。 “怎麼回事？？！” 牢獄的守衛開始注意到裡邊的情況。 “和我簽訂契約吧！“ “魔神......”奧古斯抬頭道。 “沒錯！我就是他們的末日~~” 他們應該是指曾經處死和放逐了魔神的人類和神族。 “就讓我來實現你的願望，只要把你的靈魂獻給我——” “嗯，好的。“ “我終於可以逃離這個神獄了~~” 許多年前，曾經因為屢屢幹犯殺人和謀害的罪行而在被神靈宣佈臨刑前自縊於第十八層牢獄里的惡魔路西法...... “現在終於可以復活了！” “——緊急事態！！這裡是十八層的神獄管理人。” 衛兵們開始爭相走避。 “拿去吧！路西法——”奧古斯斬釘截鐵道。 “——敢問汝的願望是？”惡魔路西法問候道。 “我要讓天上的光明殿陷入火海，叫地下的人們永遠不得安生！” 奧古斯把對神族的恨意，和對自己的厭惡擴大到了時間和空間以外。 “成交！“
              <p>11</p>
            </div>
          </div>
          <div className="page">
            <div className="pagecontent">
              與惡魔路西法簽訂完契約後，奧古斯的真身和身體爆裂，葬身在火海裡頭並瞬間氣化成了一對塵煙。
              <p>12</p>
            </div>
          </div>
          <div className="page">
            <div className="pagecontent">
              第四章<br />
              “這裡......是哪裡？”奧古斯緩緩地睜開眼睛。 “這是三千八百年後的世界。” 在牢獄裡化為了一堆煙塵之後，他在一塊黑色的地面上甦醒了過來。 “三千八百年......這到底是怎麼回事？” “哇哈哈哈（一路狂笑），多虧了大陸上的一群笨蛋！” 惡魔路西法停不下來地狂笑。 “愚蠢的魔法師，精靈族和人類，他們全部都是我計劃上的棋子罷了。” 說著，路西法便迅速現出了原型和真身。 “你究竟是誰？” “我就是這個新世界大陸上的魔神一族的首領：路西法·古蘭！” “路西法·古蘭。” 奧古斯曾經在光明殿服役的時候聽過這個名字。 相傳很久很久以前，當時的神族人和人類相處得非常融洽。創造了人類和光明殿的至高無上的神：宙斯，其手下有一個野心極大的神職副官，向神族宙斯建議使用“天罰術式”，將在伊甸園內犯下了偷摘禁果罪行的亞當和夏娃（史前人類的起源）連同大陸上的所有人民一併懲罰。 但一切並沒有如他所願，相當於十個廣島原子彈威力的天罰術並沒有被宙斯和神族採取。反而副官古蘭的進諫被神族認為是滅絕人性，最終只採取了洪水這一策略。這位擔任了神職副官和宙斯左右手的隨從因為其品性不良和野心作祟，很快就被宙斯炒了魷魚，而古蘭也都因為憎恨和嫉妒而去觸犯了禁忌。 “將靈魂出賣給惡魔之神——路西法。” 奧古斯忍不住如此脫口而出。 “路西法神是正確的！人類和神族都不值得去拯救！”
              <p>13</p>
            </div>
          </div>
          <div className="page">
            <div className="pagecontent">
              始料未及，意識到自己在狹隘之下做出了錯誤和懊悔選擇的奧古斯，已經跟路西法魔神族上了同一條船。 “涅比雅......涅比雅！” 奧古斯喊道。 “她和神族人都已經葬身在火海裡了！” 路西法如此回應。 “涅比雅她......死了？” 三千八百多年過去，是真的已經全部完結了。 “現在正是向人類大陸復仇和進軍的好時機。” 路西法吆喝道。 “你是在要求我，向自己的族人和神族的子民進攻？” 奧古斯詫異道。 “這不是最好的舞台嗎？所有的一切我都已經為你預備好了！” 奧古斯緩緩地從這片黑暗的土地上站了起來。 他走到了這個懸崖的外圍，從通古斯山脈上的頂峰下俯瞰下去。 “嗷嗚——嗷嗚（魔軍部隊的吶喊聲）——” “這些人是......”奧古斯兩眼瞳孔瞪得凸出。 一片黑漆漆的茫茫人海，幾乎看不見地平線盡頭的惡魔軍隊，密密麻麻地充斥著並有序地羅列在奧古斯眼下的這片黑暗平原之上。 傲慢、貪婪、色慾、嫉妒、暴食、憤怒和怠惰...... ”七大罪將軍聽命。” 路西法伸出去手下令道。 “是的，魔君陛下！” 領軍在師團最前面的七個騎在黑馬上戾氣最重的黑暗將領，一致異口同聲地立即回應斷崖上的惡魔。 “馬上部署向人類大陸搶灘進攻的好時機！” “Yes，My Lord！” 部隊進軍的號角立即吹奏響起，士兵震天的吶喊聲響徹了天上的烏雲。 ”不......涅比雅，涅比雅——”奧古斯追悔莫及。
              <p>14</p>
            </div>
          </div>
          <div className="page">
            <div className="pagecontent">
              ”你也是時候帶上我的面具了！“ 一切已然無力回天。 ”嗚啊啊啊啊——“ 伴隨著在崖頂上的慘叫，奧古斯的整個身體和心靈，漸漸地覆蓋上了一層完全的魔裝和妖氣。 “儘管地帶上痛苦的面具吧！” 在惡魔路西法的完全蠶食和附身的控制之下，這名少年永遠地墮落在懊悔的深淵和無盡的痛苦裡，臉上迅速覆蓋形成而出了一層冷酷無情的魔神面具。 “沒錯，我就是魔神奧古斯。“ 新生的魔神內心毫無波瀾，開始忍不住地狂笑。 “魔神奧古斯大人萬歲！！！” “嗚嗷——嗚嗷（士氣高漲）——” 經過了三千年的輪迴，烏提爾大陸即將迎來一場波瀾壯闊的陰霾。
              <p>15</p>
            </div>
          </div>
          <div className="page">
            <div className="pagecontent">
              第五章<br />
              “嗯——啊——（微微睜開眼）” “你醒啦？” 叫醒涅比雅的，並非奧古斯那熟悉的聲音，而是一張看起來非常樸素和陌生的臉孔。 “你......你是誰？“ “我叫亞瑟，你看起來傷得並不輕。” “我？我在哪裡......” 看著並不熟悉的一片木質的天花板，涅比雅才開始意識到這裡並非自己的住處。 “這裡是我母親的房間，我們發現你的時候已經是三天前的事了。” 仿佛是被面前的這個男孩的話語給震住了，涅比雅想要緩緩地挺起自己的腰。 “很痛！”涅比雅按著自己的肩膀起來。 “你不要亂動啊！你的身體各處都有不同程度的燒傷！” “燒傷？” 這麼一說，她的頭腦便迅速進入了混亂。 爆炸的衝擊，大火，還有建築物在火海裡變成一片廢墟的險象...... “啊（痛得慘叫）——” “你怎麼了？” 涅比雅趕緊按住了自己的額頭。 “光，光明殿......” 聽到涅比雅頭痛欲裂地自言自語，亞瑟隨即陷入了沉思。 “莫非，主人他們已經......” 意識到神族人可能已經全滅的真相，涅比雅不禁倒抽起一口寒氣。 “你是不是想起了什麼不好的事情？“ 見到亞瑟正在打量著自己的疑容，涅比雅只好故作鎮定地回答道。 “沒事，我只是......” 她開始察覺到自己的記憶裡好像有很多東西都缺失了。 “嗯，我明白的你的苦處。” “欸？” “每個人都有自己想要忘掉的過去。” 忽然間，涅比雅發現面前的男孩神情變得有些悲傷。
              <p>16</p>
            </div>
          </div>
          <div className="page">
            <div className="pagecontent">
              “村裡已經好多年沒見過有像你這樣裝扮奇特的外國人了。不過也難怪，現在大陸的狀況確實已經不比以前了......” 說著說著，男孩很快就轉過了身。 “你想要喝點什麼嗎？” “我......” 聽到對方這麼一問，涅比雅才意識到自己還是挺口渴的。 “我出去給你拿點井水吧！” “謝.....謝謝你。” “水拿回來了~~” “砰（房內傳出東西撞倒的聲音）——” 正當亞瑟手捧著水壺將泉水拿到了房門前。 “這股力量不是！？”涅比雅用手掩著臉痛苦地在屋內叫道。 “你怎麼了！？”亞瑟想走上前去。 “不要過來！” 涅比雅不想傷害到任何人，她只是想亞瑟離開她遠點比較安全。 “啊啊啊——” 渾身刺骨的寒冷，被火焰灼燒的疼痛感，冰火兩重天的傷害以及右眼的瞳孔深深地呈現而出的暗黑色，全都同時在涅比雅身上顯現並折磨著她的精神。 “不可能！” 一幅似曾相識的影像在她的眼前呈現。 “竟然是沉睡了將近千年的墮落之神——撒旦！？” “什麼撒旦？”亞瑟禁不住開口問道。 “他應該是在光明殿內......不是！應該是永遠被囚禁在光明殿神獄底下的，不可能被復活的惡魔才對！” 並非是正面回答亞瑟的疑問，涅比雅是自己忍不住地念了出來。 “我明白了，所有事情的真相。” 她恍然大悟。 為什麼自己會被丟下到了凡間，又是因為什麼而被地面上的人撿到，還有最重要的關鍵是—— “偉大而正確的優比特啊， 請賜予我神力——” 她已經意識到了自己某方面是出了岔子，於是當即吟唱起了咒文。 “你在幹什麼啊？”
              <p>17</p>
            </div>
          </div>
          <div className="page">
            <div className="pagecontent">
              當她抬起頭來，留意到亞瑟好像是看著面前的傻瓜一樣如此看待自己的時候。 “我連神力都......喪失了？” 看來僅僅留給涅比雅的，就只有這副在人類世界行走的肉身和空殼。 ”你剛才是不是提到了優比特？”亞瑟反問道。 “你認識她嗎！？”涅比雅連忙馬上向旁邊的少年確認。 “當然知道啊！” 出乎意料地，這個把她救回來的人類少年接下來卻很淡定地說了一大堆。 “怎麼會......” 待她差不多聽到這個故事的尾聲，她簡直是完全沒有辦法接受。 “就是這樣，魔神奧古斯和他所染指在我們這片烏提爾大陸上的魔軍，在我們偉大的光明女神，也就是卡娜·涅比雅下凡之後，統共聯合起了七位被她所選定出來的號稱“七美德”的勇者再加上我們的聯合盟軍，在通古斯山脈的合力之下最終打敗了由魔神領導的所謂“七宗罪”的大魔頭將軍！然後奧古斯本人也......” “最後奧古斯他怎麼樣了！？” 涅比雅非常緊張後面要說的劇情。 一邊看著面前這位端莊矜持的女孩卻在他一路地解說著烏提爾神話故事的時候卻一邊倒地只是關心著邪惡的反派角色，亞瑟開始感到不理解地反問起涅比雅： “喂！魔君奧古斯就那麼有魅力嗎？你好像很緊張那個惡魔似的？” “奧古斯他不是什麼惡魔！他是......” 涅比雅立即感到自己應該點到為止。 “他不是惡魔難道我是啊？你這人很奇怪耶！！”亞瑟對涅比雅的回答感到很不高興。 “對，對不起......請，請你繼續說下去......” 留意到對方好像也開始意識到自己的失言，
              <p>18</p>
            </div>
          </div>
          <div className="page">
            <div className="pagecontent">
              亞瑟反正也沒覺得有什麼冒犯到自己的地方，倒不如繼續把結局說完。 “算了，看得出來你對我們的神話故事還是很在意的。” “嗯。” 涅比雅沒有說話，她已經做好了心理準備。 “那我繼續說咯！接著，魔君奧古斯見到大勢已去之後，便帶著自己的隨從和部下，不知道怎麼地一下子就全都消失掉了~~” “消失了？” 涅比雅大驚失色。 “沒錯！據說本人好像在臨死前都不忘帶著詛咒，說著類似像死不瞑目的話，然後就從通古斯山頂上的懸崖跳了下去......“ 死無全尸。 “奧古斯！” 聽完結局後，涅比雅當即淚崩了起來。 “你小子，怎麼把人家好好地弄哭了！” “啊啊！！不關我的事啊！” 亞瑟連忙解釋道。 聽到屋內傳出哭聲的阿瑟的父親，扛著在外面砍完了木柴剛好走了進來。 “我也不知道為什麼啊！她是聽完了我們烏提爾這邊的神話故事之後就開始自己哭起來了！” “神話故事？” 亞瑟的父親好像是挺在意面前這位陌生姑娘的舉措。 “奧古斯......你為什麼......為什麼要這麼做啊！？”涅比雅一邊捶床一邊躺著哭道。 聽得出來涅比雅好像是很為這個魔君反派感到挺可惜的，父親馬上如此反問了起來。 “小姑娘，你難道不是這個國家的人嗎？” “國家？” 涅比雅反而對亞瑟父親的提問有了點反應。 “你應該是來自終之國的人類吧？亦或者是從時之國那裡剛來的魔法師？” “魔法師？” 她用的何止是魔法，那叫神力！
              <p>19</p>
            </div>
          </div>
          <div className="page">
            <div className="pagecontent">
              “我看你也不像是獸人或者精靈。畢竟在精靈國這裡，時常是很不歡迎人類或者是像你這種從邊境來的魔法師。” “——爹！她可是會魔法，我也看到了！！” 似乎亞瑟（朔夜）將剛才涅比雅的暴走認為是魔法。 “每個國家的神話故事大抵都不盡相同，但有一點是肯定的，就是魔君對這片大陸的踐踏和痕跡，永遠是無法磨滅的......” “爹！” 說到這裡，阿瑟（朔夜）開始感到有點擔憂。 “而且我作為大人來看這個故事吧......我覺得呢，結局不論是在哪個國家甚至是在很遠的山卡拉的地方，至少魔神奧古斯本人肯定是死了。” “死了？” 涅比雅再次言語恍惚地問。 “是的！至少在三百年前，他的肉身就已經灰飛煙滅掉。” “三百年？” 足足三百年了，奧古斯卻比涅比雅更早地來到了這個世界。 “小姑娘，你叫什麼名字？” “我，我叫......” 涅比雅忽然間意識到一件很嚴重的事情。 “我叫什麼名字來著？” 她記得自己是來自於光明殿，也記得奧古斯他，唯獨是...... “我是誰？為什麼我想不起來？？” 同樣是因為惡魔路西法力量的回復而引發了災難般的穿越，涅比雅不僅比奧古斯遲到了三百餘年，並且兩個人也開始各自走向了不同的命運~~
              <br/>(待續)
              <p>20</p>
            </div>
          </div>
          <div className="page cover"></div>
        </HTMLFlipBook>
      </div>
      <Footer />
    </div>
  );
}

export default Story;
