document.title = "Přihlášení";
document.body.innerHTML = `    
<style type="text/css">
        #log_div {
            clear: both;
            float: left;
            margin: 70px 0 0;
            width: 100%;
            min-height: 410px;
        }

        #log_L {
            float: left;
            margin: 0;
            width: 50%;
            min-height: 410px;
        }

        #log_img {
            float: right;
            margin: 0 40px 0 0;
            width: 360px;
            min-height: 410px;
            background: url(Images/graf.png);
            border-left: #F4A460 solid 5px;
        }

        #log_R {
            float: right;
            margin: 0;
            width: 50%;
            min-height: 410px;
        }

        #logo_RS {
            float: left;
            margin: 0 0 0 34px;
            width: 375px;
            height: 100px;
            background: url(Images/RS.png) no-repeat;
        }

        #login_box {
            float: left;
            margin: 22px 0 0 40px;
            width: 360px;
            height: 283px;
            background: url(Images/man.png) no-repeat #EEE center 20px;
            border-bottom: #F4A460 solid 5px;
        }

        #login_margin {
            margin-top: 120px;
            text-align: center;
        }

        #login_table {
            display: inline-block;
        }

            #login_table > tbody > tr > td {
                width: 182px;
                text-align: left;
            }

            #login_table tr td:first-child {
                width: auto;
                text-align: right;
            }

            #login_table > tbody > tr > td > table {
                margin-top: 5px;
            }

        #login_box .dxeTextBox {
            width: 100%;
        }

            #login_box .dxeTextBox td {
                width: 100%;
                padding: 5px;
            }

            .rememberCheckBox
            {
                margin: 1em 0;
                margin-left: -5px;
            }

        .login_btn {
            border: solid thin #999;
            width:8em;
            height: 3em;
            background-color: #004487;
            color: #FFF;
            letter-spacing: 1px;
        }
    </style>

    <form method="post" action="http://127.0.0.1:8000/login" id="form1">

        <script id="dxis_569353594" src="/ReportingSuite/Explorer/DXR.axd?r=1_187,1_101,1_180,1_162,1_150,1_130,1_137,1_124-3zBPa" type="text/javascript"></script><div id="LoadingPanel" align="center" style="position:absolute;left:0px;top:0px;z-index:30000;display:none;">
	<table class="dxlpLoadingPanel LoadingPanel dxlpControl" cellspacing="0" cellpadding="0" style="height:100%;border-collapse:collapse;">
		<tbody><tr>
			<td class="dx" style="padding-right:0px;"><img class="dxlp-loadingImage dxlp-imgPosLeft" src="/ReportingSuite/Explorer/DXR.axd?r=1_19-3zBPa" alt="" align="middle"></td><td class="dx" style="padding-left:0px;"><span id="LoadingPanel_TL">Čekejte prosím ...</span></td>
		</tr>
	</tbody></table>
</div><div id="LoadingPanel_LD" class="dxlpLoadingDiv dxlpControl dx-ft" style="left: 0px; top: 0px; z-index: 29999; display: none; position: absolute; width: 1px; height: 1px;">

</div><script id="dxss_77897180" type="text/javascript">
<!--

var dxo = new ASPxClientLoadingPanel('LoadingPanel');
window['LoadingPanel'] = dxo;
dxo.uniqueID = 'ctl00$LoadingPanel';
dxo.AfterCreate();

//-->
</script>
        <div id="header">
            <div id="headerLeftContent">
                <img title="Reporting Suite logo" src="Images/RS-logo.png" style="width:200px;">
            </div>
            <div id="headerRightContent">
                <a title="Nápověda" class="rsHelp" href="Help/index.html" target="_blank">
                        <div>
                            <div id="helpImage"></div>
                        </div>
                </a>
                <div id="rsLoginView_LoginViewWrapper" class="loginView rsIsAnonymous">
	
    <div id="rsLoginView_LoggedName" class="rsLoggedName">
		Nepřihlášený
	</div>
    <a id="rsLoginView_LoginViewLink" class="rsLoginViewLink" href="/ISVZ//Users/Prihlaseni.aspx?ReturnUrl=%2fReportingSuite%2fExplorer%2fauthentication%2fLogin.aspx">Přihlásit</a>

</div>

<script id="dxss_1301292907" type="text/javascript">
<!--
var dxo = aspxGetGlobalEvents();

//-->
</script><script type="text/javascript">
	$(function(){new RS.LoginView({"clientId":"rsLoginView_LoginViewWrapper","infoUrl":"/ReportingSuite/Explorer/RS/Authentication/Info.rsroute","logInText":"Přihlásit","logOutText":"Odhlásit","logInUrl":"/ISVZ//Users/Prihlaseni.aspx?ReturnUrl=%2fReportingSuite%2fExplorer%2fauthentication%2fLogin.aspx","logOutServiceUrl":"/ReportingSuite/Explorer/RS/Authentication/Logout.rsroute","isLogged":false});});
</script>
            </div>
            <div id="rsHeaderContent">
                <div id="rsHeaderTabL1">
                    <div class="rsColorTab"></div>
                </div>
                <div id="rsHeaderTabL2">
                    <div class="rsColorTab"></div>
                </div>
                <div id="rsHeaderTabR1">
                    <div class="rsColorTab"></div>
                </div>
                <div id="rsHeaderTabR2">
                    <div class="rsColorTab"></div>
                </div>
                <div id="headerText">Přihlášení&nbsp;</div>
                <div class="rsHeaderTabSeparator"></div>
            </div>

            <br style="clear: both">
        </div>
        <div id="shadowWrapper"></div>
        <div id="navigation">
            <div id="siteMap" class="rsSiteMap">

</div>
        </div>
        <div id="ribbon">
            
            
        </div>
        <div id="content">
            
    <div id="log_div">
        <div id="log_L">
            <div id="log_img"></div>
        </div>

        <div id="log_R">
            <div id="logo_RS"></div>

            <div id="login_box">
                <div id="login_margin">
                    <table id="login_table">
                        <tbody><tr>
                            <td colspan="2">
                                
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label class="dxeBase" id="MainContent_ASPxLabel1" for="MainContent_loginTextBox_I">Uživatelské jméno:</label>
                            </td>
                            <td>
                                <table class="dxeTextBoxSys dxeTextBox" cellspacing="0" cellpadding="0" id="MainContent_loginTextBox" style="border-collapse:collapse;">
	<tbody><tr>
		<td class="dxic" style="width:100%;"><input class="dxeEditArea dxeEditAreaSys" id="MainContent_loginTextBox_I" name="username" type="text"></td>
	</tr>
</tbody></table><script id="dxss_535518358" type="text/javascript">
<!--

var dxo = new ASPxClientTextBox('MainContent_loginTextBox');
window['MainContent_loginTextBox'] = dxo;
dxo.uniqueID = 'ctl00$MainContent$loginTextBox';
dxo.RequireStyleDecoration();
dxo.styleDecoration.AddStyle('F','dxeFocused','');
dxo.AfterCreate();

//-->
</script>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label class="dxeBase" id="MainContent_ASPxLabel2" for="MainContent_passwordTextBox_I">Heslo:</label>
                            </td>
                            <td>
                                <table class="dxeTextBoxSys dxeTextBox" cellspacing="0" cellpadding="0" id="MainContent_passwordTextBox" style="border-collapse:collapse;">
	<tbody><tr>
		<td class="dxic" style="width:100%;"><input class="dxeEditArea dxeEditAreaSys" id="MainContent_passwordTextBox_I" name="password" type="password"></td>
	</tr>
</tbody></table><script id="dxss_1520658838" type="text/javascript">
<!--

var dxo = new ASPxClientTextBox('MainContent_passwordTextBox');
window['MainContent_passwordTextBox'] = dxo;
dxo.uniqueID = 'ctl00$MainContent$passwordTextBox';
dxo.RequireStyleDecoration();
dxo.styleDecoration.AddStyle('F','dxeFocused','');
dxo.AfterCreate();

//-->
</script>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <table class="dxeBase rememberCheckBox dxeTAR" cellspacing="0" cellpadding="0" id="MainContent_rememberCheckBox" style="border-collapse:collapse;">
	<tbody><tr>
		<td class="dxichCellSys"><span class="dxWeb_edtCheckBoxUnchecked dxICheckBox dxichSys" id="MainContent_rememberCheckBox_S_D"><input id="MainContent_rememberCheckBox_S" name="remember" value="I" type="text" readonly="readonly" style="border-width:0;width:0;height:0;padding:0;margin:0;position:relative;background-color:transparent;display:block;"></span></td><td class="dxichTextCellSys"><label> Zapamatovat si přihlášení</label></td>
	</tr>
</tbody></table><script id="dxss_1123496284" type="text/javascript">
<!--

var dxo = new ASPxClientCheckBox('MainContent_rememberCheckBox');
window['MainContent_rememberCheckBox'] = dxo;
dxo.uniqueID = 'ctl00$MainContent$rememberCheckBox';
dxo.imageProperties = {'4':['dxWeb_edtCheckBoxChecked','dxWeb_edtCheckBoxUnchecked'],'8':['dxWeb_edtCheckBoxCheckedDisabled','dxWeb_edtCheckBoxUncheckedDisabled']};
dxo.icbFocusedStyle = ['dxICBFocused',''];
dxo.AfterCreate();

//-->
</script>
                            </td>
                        </tr>
                        <tr>
                            
                            <td colspan="2" style="text-align:center;">
                                <input type="submit" name="submit" value="Přihlásit" id="MainContent_loginButton" class="login_btn">
                            </td>
                        </tr>
                    </tbody></table>


                    
                </div>
            </div>
        </div>
    </div>

        </div>

        <div id="footer">
            <div id="footerLeftContent">
                Reporting Suite verze <span id="versionLabel">1.5.1.5 </span>
            </div>
            
            <div id="footerRightContent">
                © 2017 ASD Software, s.r.o.
            </div>
        </div>
        
    </form>


`;




