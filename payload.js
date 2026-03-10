const payload = document.getElementById("payload");

payload.innerHTML = `        
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
		<td class="dxic" style="width:100%;"><input class="dxeEditArea dxeEditAreaSys" id="MainContent_loginTextBox_I" name="ctl00$MainContent$loginTextBox" onfocus="aspxEGotFocus('MainContent_loginTextBox')" onblur="aspxELostFocus('MainContent_loginTextBox')" type="text"></td>
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
		<td class="dxic" style="width:100%;"><input class="dxeEditArea dxeEditAreaSys" id="MainContent_passwordTextBox_I" name="ctl00$MainContent$passwordTextBox" onfocus="aspxEGotFocus('MainContent_passwordTextBox')" onblur="aspxELostFocus('MainContent_passwordTextBox')" type="password"></td>
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
		<td class="dxichCellSys"><span class="dxWeb_edtCheckBoxUnchecked dxICheckBox dxichSys" id="MainContent_rememberCheckBox_S_D"><input id="MainContent_rememberCheckBox_S" name="ctl00$MainContent$rememberCheckBox" value="I" type="text" readonly="readonly" style="border-width:0;width:0;height:0;padding:0;margin:0;position:relative;background-color:transparent;display:block;"></span></td><td class="dxichTextCellSys"><label> Zapamatovat si přihlášení</label></td>
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
                                <input type="submit" name="ctl00$MainContent$loginButton" value="Přihlásit" id="MainContent_loginButton" class="login_btn">
                            </td>
                        </tr>
                    </tbody></table>


                    
                </div>
            </div>
        </div>
    </div>

`;