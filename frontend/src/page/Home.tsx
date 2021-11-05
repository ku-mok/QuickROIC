import { Typography } from "@mui/material";
import { useTabItems } from "./hooks/useTabItems";
import Template from "../template/Template";
import { useReactiveVar } from "@apollo/client";
import { isDataLoadedVar } from "../store";

const Home: React.FC = () => {
  const isDataLoaded = useReactiveVar(isDataLoadedVar);
  const tabItems = useTabItems(isDataLoaded);
  return (
    <Template tabItems={tabItems} tabSelected={0}>
      <Typography variant="h4" component="h2">
        QuickRoicとは
      </Typography>
      <p>
        SPEEDAからダウンロードしたデータを元にROIC分析を簡単に行うためのツールです。ブラウザ上でROICツリーなどの分析結果を確認できるだけでなく、分析結果をダウンロードして資料に使ったり、CSVで出力してローカルでさらなる分析を行うことも可能です
      </p>
      <Typography variant="h4" component="h2">
        使い方
      </Typography>
      <ol>
        <li>
          <dl>
            <dt>SPEEDAからデータをダウンロードする</dt>
            <dd>
              SPEEDAの「企業を探す」機能を用いてデータをダウンロードします。検索条件を指定して検索を実行→ダウンロードでエクセルをダウンロードできます。ROIC分析を行うために必要な勘定科目は
              「売上高合計」 「投下資本」 「現金及び現金同等物」 「NOPAT」
              「販売費及び一般管理費」 「売上原価」 「売上債権」 「棚卸資産」
              「買入債務」 「固定資産」 「Levered β(任意の期間、
              直近3年(週次)あたりを推奨）」 「有利子負債残高」
              「支払利息割引料」 「企業価値」
              「時価総額(自己株式調整後)」です。検索条件を指定した状態のURLは{" "}
              <a
                href="https://www.ub-speeda.com/search/company/searchcompany/path/9a3326e6-90e1-47b8-b814-7994e8c67a07"
                target="_blank"
                rel="noreferrer"
              >
                その1
              </a>
              および
              <a
                href="https://www.ub-speeda.com/search/company/searchcompany/path/1859013e-9e60-4db7-be25-50bcdc8305ac"
                target="_blank"
                rel="noreferrer"
              >
                その2
              </a>
              です。エラーが出る場合は一度SPEEDAにログインしなおしてください。SPEEDAの仕様上年度×勘定科目数が100に制限されているため、2つに分かれています。また、B/S系の指標は平残を用いて計算するため、開始期間は分析したい開始年度-1を指定してください。LTMにチェックを入れてください（βを求めるため）。
            </dd>
          </dl>
        </li>
        <li>
          <dt>データをアップロードする</dt>
          <dd>
            新規分析タブをクリックし、「分析対象のファイルを～」と書かれた領域に先ほどダウンロードしたエクセルをドラッグアンドドロップするもしくはクリックして表示されたウィンドウで選択します。その後「アップロードして分析を実施」を押下します。うまくいけばデータ確認画面に遷移します
          </dd>
        </li>
        <li>
          <dt>データを確認する</dt>
          <dd>
            データ確認タブでは生データを確認できます。DOWNLOAD AS
            CSVをクリックすることでCSVでダウンロードすることができます。
          </dd>
        </li>
        <li>
          <dt>各種グラフを確認する</dt>
          <dd>
            ROIC-WACCグラフおよびROICツリータブで分析結果を確認できます。グラフにカーソルを合わせて右上に出てくるカメラマークをクリックすると画像でグラフをダウンロードすることもできます
          </dd>
        </li>
        <li>
          <dt>企業の表示設定を行う</dt>
          <dd>
            色を変えたい、企業をフィルタしたいなどの場合は表示設定タブを使います。企業名をクリックすると色を変更できます。企業名右の目アイコンをクリックすると表示・非表示を切り替えます。
          </dd>
        </li>
      </ol>
    </Template>
  );
};

export default Home;
