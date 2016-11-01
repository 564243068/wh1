angular.module('dengluApp').controller("cen",['$scope','$state','$http','servers','$cookieStore',function ($scope,$state,$http,servers,$cookieStore) {
	 $scope.updata=[]
     var cook=$cookieStore.get("cok")
       if(cook!=null){
       		 $scope.updata.username=cook.name
			 $scope.updata.password=cook.pass
       }
	$scope.aa=false
	$scope.aac=function(a){
		a ? $scope.aa=true : $scope.aa=false;
	}
	if($cookieStore.get("mdl")=="mdl"){
	  	    $scope.aa=true
	  	    $http({
			url:servers+"/users/login",
			method:"POST",
			data:{username:$scope.updata.username,password:$scope.updata.password}
		}).success(function(e){
			$state.go("bq")
		})
	  }
	$scope.add=function(){	
		$http({
			url:servers+"/users/login",
			method:"POST",
			data:{username:$scope.updata.username,password:$scope.updata.password}
		}).success(function(e){
			if($scope.aa==true){
		   $cookieStore.put("mdl","mdl")
		   $cookieStore.put("cok",{name:$scope.updata.username,pass:$scope.updata.password},{expires:new Date(new Date().getTime()+6)})
		}
			$cookieStore.put("id",e.uid)
			$state.go("bq")
		})
	}
}]).controller("can",['$scope','$http','servers','$state','$cookieStore',function ($scope,$http,servers,$state,$cookieStore) {
	$scope.ad=function(){
		$http({
			url:servers+"/users",
			method:"POST",
			data:$scope.updata
		}).success(function(e){
			
			 $cookieStore.put("cok",{name:$scope.updata.username,pass:$scope.updata.password})
			$state.go("dengl")
		})
	}
}]).controller("cbq",['$scope','$http','servers','$state','$cookieStore',function ($scope,$http,servers,$state,$cookieStore) {
	$scope.uid=$cookieStore.get("id")
	$scope.tc=function(){
		$cookieStore.remove("mdl")
		$cookieStore.remove("cok")
		$cookieStore.remove("id")
		$state.go("dengl")
	}
	$scope.a=0

	$scope.jz=function(abc){
		if($scope.wow==''){
		$scope.a=$scope.a+abc
		if($scope.a<0){
			return 
		}else{
		$http({
			url:servers+"/item",
			method:"get",
			params:{"uid":$scope.uid,"$skip":$scope.a,"$limit":5}
		}).success(function(e){
//			if($scope.lol==1){
//				$('.hg').attr('disabled',' ')
//			}
			if(e==''){
//				$('.hg').attr('disabled','disabled')
//				$scope.lol=1
//			$scope.a=$scope.a+5	
              return
			}else{
//				alert(1)
				$scope.data=e
			}
    
		})}
		}else{
		$scope.a=$scope.a+abc
		if($scope.a<0){
			return 
		}else{
		$http({
			url:servers+"/item",
			method:"get",
			params:{"uid":$scope.uid,"$skip":$scope.a,"$limit":5,"tag":$scope.wow}
		}).success(function(e){
//			if($scope.lol==1){
//				$('.hg').attr('disabled',' ')
//			}
			if(e==''){
//				$('.hg').attr('disabled','disabled')
//				$scope.lol=1
			return
			}else{
//				alert(1)
				$scope.data=e
			}
           
		})}
	 }
	}

	 $http({
			url:servers+"/item",
			method:"get",
			params:{"uid":$scope.uid,"$skip":$scope.a,"$limit":5}
	}).success(function(e){
           $scope.data=e
		})	
	
	$scope.sc=function(e){
		$http({
			url:servers+"/item/"+e.id,
			method:"delete",
		}).success(function(){
            $scope.data.splice($scope.data.indexOf(e),1)
		})
	}
	$scope.xsb=function(ab){
		 $scope.wow=ab
		 $scope.a=0
		 $http({
			url:servers+"/item",
			method:"get",
			params:{"uid":$scope.uid,"$skip":$scope.a,"$limit":5,"tag":ab}
	}).success(function(e){
           $scope.data=e
		})	
	}
	$scope.xqb=function(){
		$http({
			url:servers+"/item",
			method:"get",
			params:{"uid":$scope.uid,"$skip":$scope.a,"$limit":5}
	}).success(function(e){
           $scope.data=e
           $scope.wow=''
		})
	}
}]).controller("ctj",['$scope','$http','servers','$state','$cookieStore',function ($scope,$http,servers,$state,$cookieStore) {
	$scope.uid=$cookieStore.get("id")
	$scope.tg=[]
	$scope.bkx=function(aa){	
		if($scope.tg.indexOf(aa)==-1){
			$(".bkx").attr("class","label label-primary bkx")
            $scope.tg.push(aa)
		}else{
			$(".bkx").attr("class","label label-info bkx")
			$scope.tg.splice($scope.tg.indexOf(aa),1)
		}
	}
	$scope.fd=function(aa){
		if($scope.tg.indexOf(aa)==-1){
			$(".fd").attr("class","label label-primary fd")
            $scope.tg.push(aa)
		}else{
			$(".fd").attr("class","label label-info fd")
			$scope.tg.splice($scope.tg.indexOf(aa),1)
		}	
	}
	
	$scope.gx=function(aa){
		if($scope.tg.indexOf(aa)==-1){
			$(".gx").attr("class","label label-primary gx")
            $scope.tg.push(aa)
		}else{
			$(".gx").attr("class","label label-info gx")
			$scope.tg.splice($scope.tg.indexOf(aa),1)
		}	
	}
	$scope.mhd=function(aa){
		if($scope.tg.indexOf(aa)==-1){
			$(".mhd").attr("class","label label-primary mhd")
            $scope.tg.push(aa)
		}else{
			$(".mhd").attr("class","label label-info mhd")
			$scope.tg.splice($scope.tg.indexOf(aa),1)
		}	
	}
	$scope.ssd=function(aa){
		if($scope.tg.indexOf(aa)==-1){
			$(".ssd").attr("class","label label-primary ssd")
            $scope.tg.push(aa)
		}else{
			$(".ssd").attr("class","label label-info ssd")
			$scope.tg.splice($scope.tg.indexOf(aa),1)
		}
	}
	$scope.tj=function(){
		$('.tj').attr('disabled','disabled')
		$http({
			url:servers+"/item",
			method:"post",
			data:{"title":$scope.title,"content":$scope.content,"uid":$scope.uid,"tag":$scope.tg}
		}).success(function(e){
			$http({
			url:servers+"/tag",
			method:"post",
			data:{"tag":$scope.tg,"tid":[e.id]}
		}).success(function(e){
             $state.go("bq")
		})
		   
		})
	}
	
}]).controller("xg",['$scope','$http','servers','$state','$cookieStore','$stateParams',function ($scope,$http,servers,$state,$cookieStore,$stateParams) {
	$scope.xdata=$stateParams
	$scope.save=function(){
		$('.hy').attr('disabled','disabled')
		$http({
			url:servers+"/item/"+$scope.xdata.id,
			method:"put",
			data:$scope.xdata
		}).success(function(){		
			window.location.href="index.html#bq"
		})
	}

}])