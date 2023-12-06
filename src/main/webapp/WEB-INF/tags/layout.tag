<%@ tag language="java" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width"/>
    <title>MBX</title>
    <link href="/com/css/layout.css" rel="stylesheet">
    <link rel="stylesheet" href="/com/css/index.css">
	<link href="/com/assets/fontawesome/css/fontawesome.css" rel="stylesheet">
	<link href="/com/assets/fontawesome/css/all.css" rel="stylesheet">
	<link href="/com/assets/fontawesome/css/solid.css" rel="stylesheet">
	<link href="/com/assets/fontawesome/css/brands.css" rel="stylesheet">
	<link href="/com/assets/fontawesome/css/v4-font-face.css" rel="stylesheet">
    <script src="/com/js/jquery/jquery-3.6.0.min.js"></script>
    <script src="/com/js/login.js"></script>
</head>
<body>
    <div class="main-layoutTag-body display-flex align-items-center flex-direction-column">
        <jsp:include page="/WEB-INF/www/header.jsp"/>
        <div class="main-layoutTag-contents display-flex">
            <jsp:include page="/WEB-INF/www/sidebar.jsp"/>
            <jsp:doBody/>
        </div>
        <jsp:include page="/WEB-INF/www/footer.jsp"/>
    </div>
</body>
    <script src="/com/js/common.js"></script>

</html>