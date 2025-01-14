--- 
title: 初心者向け Terraform ガイド – インフラストラクチャをコードで実践しよう 
date: 2025-01-14T14:28:25.927Z 
author: Oluwatobi 
authorURL: https://www.freecodecamp.org/news/author/Tobilyn77/ 
originalURL: https://www.freecodecamp.org/news/a-beginners-guide-to-terraform-infrastructure-as-code-in-practice/#heading-benefits-of-terraform 
posteditor: "" 
proofreader: "" 
--- 
 
近年、クラウド開発の世界では大きなパラダイムシフトが進んでいます。より新しい、複雑なアプリケーションが急速にクラウドに配備され、ダウンタイムを最小限に抑えることが求められています。こうした中で、インフラストラクチャをコードで管理するという概念が登場し、アプリケーション開発のプロセスを簡素化するさまざまなツールが生まれています。 
 
<!-- more --> 
 
インフラストラクチャをコードで管理するとは一体何でしょうか？この手法がどのように開発プロセスや体験を向上させるのか、そして Terraform がどのように関与しているのかをこのガイドで詳しく探っていきます。その前に、次のような準備が必要です： 
 
- クラウドとクラウド用語についての基本的な知識 
   
- コード例を実行する PC へのアクセス 
   
- GCP アカウント 
 
それでは、始めましょう。 
 
### この記事で取り上げる内容 
 
1. [インフラストラクチャをコードで管理するとは][1] 
     
2. [Terraform とは何か？][2] 
     
3. [Terraform の利点][3] 
     
4. [Terraform で使用される一般的な用語][4] 
     
5. [デモプロジェクト: Terraform 設定を書く方法][5] 
     
6. [結論][6] 
     
 
## インフラストラクチャをコードで管理するとは (IaC) 
 
インフラストラクチャをコードで管理する手法は、コードベースの設定ドキュメントを用いてクラウドインフラとアプリケーションを生成することを指します。このプロセスは、自動でデータベースや仮想マシン、サーバーを作成するプロセスを進めます。特に、同一の複数サービスを展開する際における手動でのクラウドサービス展開の頻度を減らすことで、ユーザー体験を向上します。 
 
インフラストラクチャをコードで管理するアプローチには、「命令型 (Imperative)」と「宣言型 (Declarative)」の 2 つがあります。 
 
宣言型アプローチを使う場合、生成したいインフラストラクチャの期待出力を細かく設定し、使用中の IaC ツールがその出力をどのように達成するかを判断します。 
 
一方、命令型アプローチでは、望むインフラストラクチャ状態を達成するために必要な手順を具体的に指定します。命令型アプローチは複雑なインフラストラクチャ設定により適しているように感じますが、宣言型アプローチでも十分に機能します。 
 
Some tools are capable of both approaches while others are only suited to one or the other. Examples of some of the popular IaC tools used globally include [Terraform IaC][7], [AWS Cloud Formation][8], [Ansible][9], and [Pulumi][10], [Chef][11], among others. 
 
インフラストラクチャを **コード** で管理するということは、IaC 領域内のさまざまなテンプレート言語でインフラストラクチャを構築するコードを書くことを意味します。一般的なテンプレート言語には、JSON、YAML、ARM テンプレート、HCL、Heat スクリプトなどがあります。 
 
クラウドインフラを実行するためのスクリプトツールを使用することもできます。人気のあるスクリプトには、Bash や PowerShell があります。これらは多くの PC にプリインストールされていることがあります。 
 
これらのツールの中でも特に Terraform は、その特異な特性の数々で際立っており、本記事ではその Terraform を詳しく解説します。 
 
## Terraform とは何か？ 
 
Terraform は、2014 年に HashiCorp によって開発されたオープンソースのツールです。年々改良を重ね、現在では複数のクラウドサービスプロバイダーを跨いでインフラを作成できるクラウドアグノスティックなツールとして利用されています。 
 
また、Terraform はクラウドベースのソフトウェアサービスツールである [Terraform Cloud][12] も提供しています。これにより、旧来のローカルベースの方法を使う Terraform CLI ツールが廃止され、クラウドツールのクラウドベースのデプロイメントを可能にしています。 
 
さらに、他の IaC ツールと同様にテンプレート言語を利用しており、Terraform では HashiCorp テンプレート言語 (HCL) を使用してインフラストラクチャを構築します。 
 
## Terraform の利点 
 
ここでは、クラウドエンジニアが Terraform を利用することで得られる利点と、クラウドエコシステムにおけるツールの重要な役割を紹介します。 
 
### **1. 宣言型アプローチ** 
 
このアプローチにより、デプロイされるすべての必要なインフラストラクチャ（データベース、サーバーなど）が明確に示され、適切に実行されることが保証されます。これにより、競合を回避します。 
 
### **2. 競合処理** 
 
Terraform の効率的なクラウドツール自動化機能に加えて、競合検出と処理に優れる点があります。特に `Terraform plan` 機能によって、インフラストラクチャの整合性における予測される、または潜在的な競合を事前に明らかにし、デプロイ前に簡単に修正可能にします。この機能については後のセクションでさらに詳しく説明します。 
 
### **3. クラウドアグノスティック** 
 
Terraform は、主要クラウドサービスプロバイダー（AWS、GCP、Azure）全てで効果的なインフラ自動化機能を持つ、多目的かつマルチクラウドの自動化サービスプロバイダーです。ハイブリッドおよび異なるプロバイダー間での自動化も可能です。 
 
### **4. ユーザーフレンドリー** 
 
Terraform は最大規模のクラウド自動化ツールの一つで、最大のユーザーコミュニティを持っています。多くの初心者向けのチュートリアルが用意されており、ツールの使い方を素早く習得できます。詳しく知りたい方は、より深く掘り下げることができる [ドキュメント][13] をぜひご覧ください。 
 
--- 
 
[1]: #overview-of-infrastructure-as-code 
[2]: #what-is-terraform 
[3]: #benefits-of-terraform 
[4]: #common-terms-used-in-terraform 
[5]: #demo-project-how-to-write-a-terraform-configuration 
[6]: #conclusion 
[7]: https://www.terraform.io 
[8]: https://aws.amazon.com/cloudformation/ 
[9]: https://www.ansible.com/ 
[10]: https://www.pulumi.com/ 
[11]: https://www.chef.io/ 
[12]: https://www.terraform.io/cloud 
[13]: https://developer.hashicorp.com/terraform/docs 
 
 
Terraform は、ローカルコンピュータ上で自動で自動化状態のローカルバックアップを作成し、何か問題が発生した場合でもすぐに復元とファイル処理を保証します。また、必要に応じてリモートのクラウドサービスプロバイダへのリモートバックアップオプションも提供しています。 
 
### **6\. バージョン管理** 
 
Git のバージョン管理システムのように、Terraform には変更を追跡できる組み込みのバージョン管理システムがあります。例えば、現在のバージョンにエラーがある場合に過去のバージョンへ戻ることも可能です。 
 
### **7\. コードの再利用性** 
 
Terraform の開発者向けドキュメントページには、容易に再利用可能なコードテンプレートが豊富に用意されています。 
 
これまでに紹介した Terraform の利点を踏まえ、次に Terraform で使われる一般的な用語について学んでいきましょう。 
 
## Terraform で使われる一般的な用語 
 
Terraform を使い始める前に、頻繁に出てくるいくつかの重要な用語を知っておく必要があります。ここで知っておくべきものを紹介します。 
 
1.  **プロバイダ (Providers):** Terraform におけるプロバイダは、様々な API やクラウドサービスとやり取りするためのプログラミングインタフェースです。例えば、GCP や Azure のようなクラウドサービスプロバイダとインターフェイスするためにプロバイダを使用します。 
     
2.  **モジュール (Modules):** モジュールは Terraform フレームワーク内で特に作成されたもので、クラウドサービスを簡単にオーケストレーションできる再利用可能なコンポーネントとして機能します。さらに、モジュールにはクラウドサービスに関する重要な情報を格納し、モジュール変数を使用して独自性を確保するために修正することができます。 
     
3.  **リソース (Resources):** Terraform では、リソースは作成されるクラウドインフラの構成要素を指します。例えば、クラウドネットワークや仮想マシン、可用性ゾーン、その他のインフラストラクチャなどがあります。 
     
4.  **状態 (State):** Terraform における状態の概念は、その効率性の基盤を形成します。状態はインフラリソースの現在の構成を追跡し、Terraform が作成、修正、または削除したすべてのリソースの詳細を含んでいます。Terraform のバージョン管理システムは、コードファイルの変更を追跡し、それに基づいてインフラを破棄またはプロビジョニングします。 
     
5.  **ワークスペース (Workspace):** ワークスペースは、バージョン管理システムに似た形でファイルに制約を生むものとして機能します。同じバックエンド内でインフラ構成の複数のインスタンスをクリーンで分離された方法で管理できます。開発、ステージング、本番環境を同じ Terraform 構成を使って分けるのに役立ちます。 
 
## デモプロジェクト: Terraform 構成の作成方法 
 
このセクションでは、少しのコードで Google Cloud プログラムの仮想マシンをオーケストレーションするための初めての Terraform ファイルの作成に取り組んでいきます。ただし、その前にデモプロジェクトを実装する際に理解しておくべきさまざまなコマンドについて説明します。 
 
### 一般的な Terraform コマンド 
 
-   `terraform init`**:** このコマンドは、Terraform ツールを初期化し、必須のクラウドプロバイダ固有のファイルをダウンロードします。今回の場合、GCP と Terraform プロバイダ間の接続が確立されます。 
     
-   `terraform fmt`**:** このコマンドは、コードの最適なフォーマットとインデントを自動的に保証します。コードの秩序ある実行を確保し、エラーを最小限に抑えます。 
     
-   `terraform plan`**:** このコマンドは Terraform コードの実行手順を示し、実行中に発生する可能性のあるエラーを検出します。さらに、Terraform コードの中の実行を妨げる可能性のあるエラーを強調します。最後に、Terraform の状態管理と連携し、状態の変化を検出し、必要に応じてクラウドサービスを削除または生成します。 
     
-   `terraform apply`**:** このコマンドは `terraform plan` コマンドによって計画された Terraform 状態を実行します。 
     
-   `terraform destroy`**:** このコマンドは Terraform スキームの最終コマンドで、Terraform apply コマンドを使用して作成されたすべてのクラウドサービスを無効化または削除するために使用されます。インフラストラクチャが適切に作成されるように、上記のコマンドを順番に実行することが重要です。 
     
 
### IaC 対応の GCP 仮想マシンの作成 
 
これらの重要なコマンドを学んだので、初めての IaC 対応 GCP 仮想マシンを作成して試してみましょう。 
 
コードエディタに次のコードを入力します： 
 
``` 
provider "google" { 
  project = "your-gcp-project-id"  # GCP プロジェクト ID に置き換えてください 
  region  = "us-central1" 
  zone    = "us-central1-a" 
} 
``` 
 
このコードは、必要なクラウドリソースを生成するために使用しているクラウドプロバイダを示します。今回の場合、それは Google クラウドプログラムです。指定された名前は単に "google" です。他のクラウドプロバイダーである AWS や Azure はそれぞれ "aws"、"azure" です。 
 
2 行目は GCP サブスクリプションの識別子を示し、これは各 GCP アカウントに固有で（正確な統合を促進するために役立ちます）、指定された箇所にあなたのプロジェクト ID を入力してください。 
 
また、適切なリソース地域とリソース可用性ゾーンを含める必要があります。これは、この仮想マシンを動作させるための物理的な基盤です。今回は、中央 USA の region と 1-a の可用性ゾーンを選びました。クラウド地域と可用性ゾーンについての詳細は[こちら][14]をご覧ください。 
 
``` 
resource "google_compute_instance" "vm_instance" { 
  name         = "example-vm" 
  machine_type = "e2-medium"  
``` 
 
このようにして、Terraform を使って GCP の仮想マシンをオーケストレーションするための基本的なステップを実行することができます。 
 
上記のコードスニペットは、オーケストレーションされる具体的なコンピュートリソースを指定しています。私たちの場合は、「vm_instance」としてコード化された仮想マシン インスタンスです。プロジェクトで作成する仮想マシンに割り当てたい名前は `'example-vm'` です。仮想マシンの名前は一意である必要があることに注意してください。選択した仮想マシンのタイプは E2（汎用）のミディアム タイプ VM です。仮想マシンの種類についての詳細は [こちら][15] をご覧ください。 
 
さらに、起動時のオペレーティングシステム（“boot_disk”）として、Debian Linux オペレーティングシステムのバージョン 11 のイメージを指定しています。 
 
```hcl 
network_interface { 
    network = "default"  # 初期設定の VPC ネットワークに接続 
    access_config { 
 
    } 
} 
 
output "instance_ip" { 
    value = google_compute_instance.vm_instance.network_interface[0].access_config[0].nat_ip 
} 
``` 
 
仮想マシンの作成を完了するには、リモートアクセスを可能にするために仮想ネットワークを設定する必要があります。ネットワーク インターフェース ブロックは、GCP によって提供されるデフォルトの VPC（仮想プライベートクラウド）ネットワークに仮想マシンを接続します。VPC ネットワークがなければ、仮想マシンとインターフェースすることはできません。出力ブロックは、端末にデフォルトのアクセス IP アドレスも表示し、それを使って仮想マシンに接続できます。 
 
次に、完成形のコードは以下の通りです。 
 
```hcl 
 
provider "google" { 
    project = "your-gcp-project-id"  # あなたの GCP プロジェクト ID に置き換えてください 
    region  = "us-central1"           
    zone    = "us-central1-a"        
} 
 
resource "google_compute_instance" "vm_instance" { 
    name         = "example-vm"          
    machine_type = "e2-medium"           
 
    boot_disk { 
        initialize_params { 
            image = "debian-cloud/debian-11"   
        } 
    } 
 
    network_interface { 
        network = "default"  # 初期設定の VPC ネットワークに接続 
        access_config { 
 
        } 
    } 
 
output "instance_ip" { 
    value = google_compute_instance.vm_instance.network_interface[0].access_config[0].nat_ip 
} 
``` 
 
ここからは、このコードを次の画像に示されているコマンドを使用して実行します。 
 
![29561c5c-3908-43d1-8579-53a3de33358a](https://cdn.hashnode.com/res/hashnode/image/upload/v1734796321588/29561c5c-3908-43d1-8579-53a3de33358a.png) 
 
コマンド `terraform -v` は、ターミナルに Terraform が正常にインストールされたことを確認します。予想される出力は、インストールされている Terraform ツールのバージョンです。 
 
![149f5f24-90eb-4777-8ae3-18acdd3c758a](https://cdn.hashnode.com/res/hashnode/image/upload/v1734796340539/149f5f24-90eb-4777-8ae3-18acdd3c758a.png) 
 
次に実行されるコマンドは、`terraform init` 関数で、クラウド サービスプロバイダーとの通信を初期化します。私たちの場合は GCP です。必要なすべての依存関係もインストールされます。 
 
![bd886728-dfdb-49f7-bcbf-1e53ff203b35](https://cdn.hashnode.com/res/hashnode/image/upload/v1734796301342/bd886728-dfdb-49f7-bcbf-1e53ff203b35.png) 
 
`terraform fmt` コマンドは適切なコードのフォーマッティングとインデントを保証するために実行されます。その後、`terraform plan` コマンドが順次実行されます。 
 
![bb454ec4-47e4-40a4-84fc-91c580fb77bb](https://cdn.hashnode.com/res/hashnode/image/upload/v1734889731467/bb454ec4-47e4-40a4-84fc-91c580fb77bb.png) 
 
上の画像から、Terraform が期待される仮想マシンを生成するためのステップを見ることができます。 
 
Terraform のプランが成功裏に実行された場合は、その後 `terraform apply` 関数を実行して、Terraform のプランで説明されたステップを実行します。 
 
![d1d8f9f9-98a9-4ab0-be00-60a9b2b993a9](https://cdn.hashnode.com/res/hashnode/image/upload/v1734796355772/d1d8f9f9-98a9-4ab0-be00-60a9b2b993a9.png) 
 
これにより、上記のように Terraform の実行に関する確認を求めるプロンプトが生成されます。「Yes」と入力すると、操作がスムーズに進行します。 
 
![a08254b0-878a-4681-b6ce-f6b0a9a83bc6](https://cdn.hashnode.com/res/hashnode/image/upload/v1734796361770/a08254b0-878a-4681-b6ce-f6b0a9a83bc6.png) 
 
成功すると、上記のように成功メッセージが表示されます。これで、コードだけでクラウド インフラストラクチャを作成しました。作成した仮想マシンを削除するには、`terraform destroy` コマンドを呼び出すことができます。 
 
## 結論 
 
この記事では、コードとしてのインフラストラクチャについての基本を学びました。Terraform、その利点、主な機能やコマンドについて説明し、デモプロジェクトでの使用方法を例示しました。 
 
さらに知識を深めるために、[Terraform のドキュメント][16] でより多くのコード例を確認することをお勧めします。また、新たに得た知識を活用して、実際に役立つプロジェクトを自動化することもお勧めします。 
 
コメントや質問がある場合は、お気軽にメッセージをください。私の他の記事は [こちら][17] でチェックできます。それではまた次回、お楽しみに！ 
 
 