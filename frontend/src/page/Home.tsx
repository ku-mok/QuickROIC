import { Typography } from "@mui/material";
import Template from "../template/Template";

const Home: React.FC = () => {
  return (
    <Template>
      <Typography variant="h4" component="h2">
        QuickRoicとは
      </Typography>
      <p>
        SPEEDAからダウンロードしたデータを元にROIC分析を簡単に行うためのツールです。ブラウザ上でROICツリーなどの分析結果を確認できるだけでなく、分析結果をダウンロードして資料に使ったり、CSVで出力してローカルでさらなる分析を行うことも可能です
      </p>
      <Typography variant="h4" component="h2">
        使い方
      </Typography>
      <p>To Be Written.</p>
      <Typography variant="h4" component="h2">
        留意事項
      </Typography>
      <p>
        あくまで私的に開発して私的に運用しているツールです。（オフィシャルに運用しようとと思うと諸々の審査・申請が死ぬほど面倒なので・・・）以下の留意事項を理解してご使用ください。
      </p>
      <ul>
        <li>
          結果の正確性・完全性については保障できません。テストケースについては、
          <a href="https://github.com/ku-mok/QuickRoic">コードレポジトリ</a>
          のsample_casesディレクトリ内を確認ください。InputSpeedFile.xlsxを元として、
          整形されたものが DataframeExpected.xlsx ROIC計算まで行ったものが
          RoicExpected.xlsxです。コーポレートファイナンス強い方の検算をお待ちしております。
        </li>
        <li>
          必要なセキュリティ上の措置（通信経路の暗号化やサーバへの侵入防止、送信されたデータは処理後すぐに削除するなど）は行っておりますが、オフィシャルのセキュリティ審査も通っていないので、
          <strong>
            非上場企業の財務諸表や事業別財務諸表など、クライアント情報を含むデータを
            SPEEDAの形式に乗せ換えて
            絶対に送信する行為は絶対に行わないでください。
          </strong>
        </li>
        <li>
          (技術的補足)送信されたExcelファイルは読み取り後即座に削除されます。サーバ側が完全にステートレスで読み取り結果もサーバ側には保存されていません（分析のたびにクライアントから送信されています）。クライアントから送信される情報はHTTPS通信により暗号化されており、一般に盗聴は非常に困難です。リバースプロキシサーバにてTLS終端処理を行うため、上田の家のネットワークのLAN内通信（リバースプロキシ-アプリケーションサーバ間）は平文通信です。したがって、なんらかの攻撃者により上田の家のネットワークに侵入を許していた場合、情報は流出します。
        </li>
        <li>仕様の誤り・動作のバグなどを見つけられた方は連絡をください</li>
        <li>機能の追加要望などは言ってくれれば対応するかもしれません</li>
        <li>
          コードが書ける人は自分で書いてプルリク送るとレビューの上マージします
        </li>
        <li>
          UIがダサいのは上田のセンスの問題です。気に入らない人がいたらデザインをください。
        </li>
      </ul>
    </Template>
  );
};

export default Home;
