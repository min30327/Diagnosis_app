/**
*   Angular app.js
*   Write the controllers and the filters.
    Module name is [App].
    @Example
    App.controller('[Controller name here]',['$scope','$filter',function($scope,$filter){
        //$scope or $filter chain method here.
    }]);
    @author 2014 Mineo Okuda.
**/
 	App = angular.module('App',['ngAnimate']);
    App.controller('Diagnosis',['$scope','$filter',function($scope,$filter){
        $scope.stage  = [];
        $scope.start = false;
        $scope.now = 0;
        addBgClass();
        $scope.score = [0,0,0,0,0,0,0,0,0];
        $scope.q = q;
        $scope.type = type;
        $scope.length = q.length -1;
        $scope.end = false;
        $scope.resource = resource;
        $scope.results = {
            type : '',
            value :''
        }
        $scope.init = function(){
            $scope.start = true;
            $scope.stage[1] = true;
            $scope.now = 1;
            addBgClass();
        }
        $scope.last = function($stage){
            $scope.end = true;
            $scope.stage[$stage] = false;
            $scope.now = q.length;
            addBgClass();
        }
        $scope.return_top = function(){
            $scope.end = false;
            $scope.stage  = [];
            $scope.now = 0;
            $scope.start = false;
            $scope.score = [0,0,0,0,0,0,0,0,0];
            $scope.results = {
            type : '',
            value :''
        }
            addBgClass();
        }

        $scope.answer = function($stage,$num){

            $scope.stage[$stage] = false;
            $scope.stage[$stage+1] = true;
            $scope.now = $stage+1;
            addResults($stage,$num);
            addBgClass();
            if($stage == $scope.length){
                $scope.stage[$stage] = false;
                $scope.end = true;
            }
        }
        $scope.next = function($stage){
            $scope.end = false;
            if($stage == $scope.length){
                $scope.stage[$stage] = false;
                $scope.end = true;
            }else{
                $scope.stage[$stage] = false;
                $scope.stage[$stage+1] = true;
                $scope.now = $stage+1;
            }
            addBgClass();
        }
        $scope.prev = function($stage){
            $scope.end = false;
            if($stage == 1){
                $scope.stage[$stage] = false;
                $scope.start = false;
            }else{
                $scope.stage[$stage] = false;
                $scope.stage[$stage-1] = true;
                $scope.now = $stage-1;
            }
            addBgClass();
        }
        function addResults($stage,$num){
            $scope.score[type[$stage]] += ($num);
            var key = $scope.score.indexOf( Math.max.apply(null, $scope.score) );
            $scope.results = resource[key];
        }
        function addBgClass(){
            for(i=1;i<7;i++)
            $('body').removeClass('bg-' + i);
            $('body').addClass('bg-'+getRandomNum());
        };
        function getRandomNum(){
            return Math.floor((Math.random()*6)+1);
        };
    }]);
 	
    var q = [
            '',
            '社交的なフンイキにひかれ、人の中に入っていくのが好きな方だ。 ',
            '強い心の中からまきおこる感覚をひきおこすものを重視するほうだ。 ',
            'まわりの出来事を理論よりも感覚でとらえるほうだ。',
            '親しい気の合った人とだけ議論しようとするほうだ。',
            '自分独自の価値基準をもとうとするほうだ。',
            '事実を重視し、ものごとをとことんまで考えようとするほうだ。',
            'ものごとそのものよりも、その可能性に注目するほうだ。',
            '自分のなかに沈みこみ、ある種の予感を大切にするほうだ ',
            '感受性が強く、自分の世界に耽溺するほうだ',
            '好き嫌いがはげしく、気の合った少数の人としかつき合わないほうだ。',
            '未来を自分の内にひらめくカンに頼って切り開いていくほうだ。 ',
            '大事な決定をするときは、周囲の状況を論理的に分析してきめるほうだ。',
            '自分の判断が、周りの人の判断とよく一致するほうだ。',
            'ものごとを理屈ではなく、直観によって見きわめようとするほうだ。',
            'まわりのできごとよりも、人間について理解を深めようとするほうだ。',
            '生活を楽しむために、まわりの刺激を求めるほうだ。',
            '自分の気持ちは心の中にそっととどめておくほうだ。',
            '理屈よりもカンに頼って、現実の問題を解決するほうだ。',
            '抽象的な概念や、考え方にひかれるほうだ。',
            '自分のしていることが、社会的に認められるかどうかが気になるほうだ。',
            'まわりのできごとよりも、自分の中におこる強い印象に喜びを感じるほうだ。',
            '感情よりも、理論を先にたてて行動するほうだ。',
            'まわりにあるものごとに、敏感なほうだ。',
            '心にひらめいたことを、他人に伝えるのがうまくないほうだ。',
            '自分自身のことよりも、まわりのできごとをよく考えるほうだ。',
            '難しい状況にであうと、理屈よりもカンに頼るほうだ。',
            'まわりのことは気にしないで、自分なりの見方を大切にするほうだ。',
            '一般的な判断にもとづいた、常識を重んじるほうだ。',
            '感受性が強く、まわりの刺激に影響されやすいほうだ。',
            '自分自身を理屈よりも、感覚でとらえようとするほうだ。',
            'まわりのできごとよりも、自分の心の中からでてくる可能性を求めるほうだ。',
            '自分自身を哲学的にいろいろと考えようとするほうだ。',
            '心の中から湧きあがる強い印象に心奪われるほうだ。',
            '善・悪や美・醜の判断に、自分独特の考えをもつほうだ。',
            '心の中にひらめいたもので、自分の将来の夢を追うほうだ。',
            '行動のあり方が、感覚に訴えるものに左右されやすいほうだ。',
            '理屈っぽく考えないで、すぐに良いか悪いかをきめるほうだ。',
            '自分の心の内にひらめくものによって行動するほうだ。',
            '客観的な事実にもとづいて、論理的に考えようとするほうだ。',
            '自分自身のことについて、理屈っぽく考えるほうだ。'
    ];
    var type = [
            0,3,6,5,2,4,1,7,8,
            6,4,8,1,3,7,2,5,
            4,7,2,3,6,1,5,8,
            1,7,4,3,5,6,8,2,
            6,4,8,5,3,7,1,2
        ];

    var resource = [
        {type : '外向的思考タイプ',value:'客観的な事実を重要視して、それに基づいて筋道をたてて考えるタイプの人。\n自分の考えよりも客観的事実の方が大事で、感情表現が苦手。\n男性に多い。女性ではごくわずか。'},
        {type : '内向的思考タイプ',value:'自分自身の心の中に浮かび上がる考えを筋道立てて追うのが得意な人。\n新しい事実の発見よりも新しい考え方の発明の方が大事。\n感情面が未発達のことが多い。\n男性に多い。'},
        {type : '外向的感情タイプ',value:'どこでどういう感情を使ったらよいかよく知っており、自分の感情をよくコントロールし、周囲の状況をよく理解して、他人と良い関係を保つことが得意な人。社交上手。\nしかし、哲学など理屈を考えるのは全く苦手。\n女性に多い。男性にも見かける。'},
        {type : '内向的感情タイプ',value:'心の中に好き嫌いの判断を持っていて、自分の心の中に描いた心像に忠実であるが、それと関係ない人たちを全く無視してしまうので、自己中心的で、時に傲慢な印象を与える。\n感情面にすばらしい判断力を持っているが、その表現力が不十分で、周囲に誤解されやすいといえる。\n思考面が未発達のことがおおい。\n女性に多い。'},
        {type : '外向的感覚タイプ',value:'現実の人や物事に対して、具体的に身体的感覚で 感じ取ることが得意な人。\n色や形によいセンスを持っている。\nしかし、直感的総合力には欠ける。\n男性にも女性にもいる。'},
        {type : '内向的感覚タイプ',value:'外からの刺激をじっくりと自分の感覚に吸収し、取り込むが、それを、すぐには表現しない、または、その人自身の主観的印象が主体となってしまうので、誤解を受けやすい。\n直観による将来的見通しが全く苦手で、概して方向音痴。'},
        {type : '外向的直観タイプ',value:'直観は、直接無意識に根ざしている心機能で、周囲の人やものや将来の見通しなどにカンが働く。\n流行に敏感。\n感覚が未発達なので、周囲のものごとをじっくり捕らえることが出来ない。\nどちらかというと女性に多くみられる。'},
        {type : '内向的直観タイプ',value:'カンがよく将来の見通しなどもよく見えるが、そのカンは外の社会には向けられず、もっぱら心の内に向かっている。\n弱点は感覚で、まわりの状況や事実をよく見ようとしない。'}
    ]
