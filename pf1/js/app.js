var gApp = angular.module('gApp', []);
    gApp.run(function($rootScope){
    	$rootScope.address = "tpdnddl12@naver.com";
    	$rootScope.dns = "010-4452-8956";
    	$rootScope.title = "Portfolio";
    	$rootScope.name = "이세웅";
		$rootScope.MenuList = [
			"안녕하세요 저는 모든일에 최선을 다하는 이세웅입니다.",
			"항상 긍적인 마인드로 문제를 해결해나가겠습니다.",
		    "감사합니다.",
		    "보유기술은 아래와 같습니다.",
			"- 언어 : JAVA & Python & Javascript",
			"- Front end: HTML & CSS & JSP & Jquery",
			"- Database : mariaDB",
			"- OS: Linux, Windows"
			];
		
    });
	gApp.controller('gCtrl', function($scope) {
		$scope.htmlCheck = false;
		$scope.bodyCheck = false;
		$scope.btCheck = false;
		$scope.projectFlag = false;
		$scope.projectUrl = "";
		$scope.btnActive = 1;
		
		$scope.dropEvent = function() {
			$scope.htmlCheck = !$scope.htmlCheck;
			$scope.bodyCheck = !$scope.bodyCheck;
			$scope.btCheck   = !$scope.btCheck;
		};
		
		$scope.projectEvent = function(rows) {
			$scope.row = rows;
			if($scope.projectUrl == rows.url) {
				$scope.projectUrl = "";
				$scope.projectFlag = false;
			} else {
				$scope.projectUrl = rows.url;
				$scope.projectFlag = true;
			}
		}
		
		$scope.iFrameLink = function(){
			if($scope.iframeView){
				location.href = $scope.iframeView;
			}
		}
		
		$scope.btnList = [
			{filter: "*",      name: "All",      active: true },
			{filter: ".bgOn",  name: "Personal", active: false},
			{filter: ".bgOff", name: "Team",     active: false}
		];
		
		$scope.dataSource = [
			{
			 path: "portfolio/",
			 url : "team/UI.pdf", 
			 title: "Team",
			 name: "Impression",
			 img: "team/UImain.jpg",
			 img2: "team/changing.GIF",
			 type : true, 
			 contents: "팀원들에게 피해가 가지 않기 위해 최대한 프로젝트 기간내에 맡은 역할을 다 하려고 노력을 했습니다. 부족한 부분은 서로 돕고 항상 팀분위기를 좋게 유지 하며 계획했었던 프로젝트를 무사히 마칠 수 있었습니다. 제 첫 프로젝트였기 때문에 평소에 사용만할 줄 알았던 웹 UI를 직접 제작해본 것이 즐거웠고 어려울 것 같았던 부분을 해결해 나가며 개발에 더욱 큰 흥미를 갖게 되었습니다."
			},{
			 path: "portfolio/",
			 url : "personal/personal.pdf", 
			 title: "Personal",
			 name: "Impression",
			 img: "personal/PersonalImpression_1.GIF",
			 img2: "personal/HD.GIF",
			 type : false,
			 contents: "Web의 구조, 목적 등 모든 부분을 혼자해야 하는 프로젝트여서 초반엔 많이 힘들었습니다. 하지만 천천히 배워간다는 느낌으로 조급해하지 않고 구현해 내다 보니 기능들이 하나씩 쌓여 점점 사이트가 되어가고 있었습니다. 프로젝트를 마무리를 했고, 그동안 해왔던 것들이 아주 좋은 경험이 되었다고 생각이 들었습니다. 아직 미흡하지만 추후에 초반에 구상했던 기능들을 기능적인면에서 보안을 하고 싶고 저만의 사이트를 하나 더 만들고 싶다는 생각이 들었습니다. "
			},{
			 path: "",
			 url : "저ㅗㄴㅇㄻㄻㄴㄹ",
			 title: "Personal",
			 name: "Media",
			 img: "personal/PersonalImpression_1.GIF",
			 img2: "personal/HD.GIF",
			 type : false, 
			 contents: ""
			}
		];
		
		$scope.btnEvnet = function(index){
			$scope.projectUrl = "";
			$scope.projectFlag = false;
			
			for(var i = 0; i < $scope.btnList.length; i++){
				$scope.btnList[i].active = false;
			}
			$scope.btnList[index].active = true;
			$scope.grid.isotope({ filter: $scope.btnList[index].filter });
		}
		
		setTimeout(function(){
			$scope.grid = $('#portfolioGroup').isotope();
		}, 200);
	});
	gApp.directive('resize', function ($window) {
	    return function (scope, element) {
	        var w = angular.element($window);
	        scope.getWindowDimensions = function () {
	            return {
	                'h': w.height(),
	                'w': w.width()
	            };
	        };
	        scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
	            if(newValue.w >= 768){
					scope.htmlCheck = false;
					scope.bodyCheck = false;
					scope.btCheck = false;
				}
	        }, true);

	        w.bind('resize', function () {
	            scope.$apply();
	        });
	    }
	});

$(document).ready(function(){
   $($('li').eq(9)).mouseenter(function(){
       $($("img").eq(0)).prop("src","../images/team/UIgif.gif");
   }).mouseleave(function(){
       $($("img").eq(0)).prop("src","../images/team/UImain.jpg");
   });
   $($('li').eq(10)).mouseenter(function(){
       $($("img").eq(1)).prop("src","../images/personal/PersonalImpression.gif");
   }).mouseleave(function(){
       $($("img").eq(1)).prop("src","../images/personal/PersonalImpression_1.gif");
   });
   $($('li').eq(11)).mouseenter(function(){
       $($("img").eq(2)).prop("src","../images/personal/PersonalImpression.gif");
   }).mouseleave(function(){
       $($("img").eq(2)).prop("src","../images/personal/PersonalImpression_1.gif");
   });
       

});
