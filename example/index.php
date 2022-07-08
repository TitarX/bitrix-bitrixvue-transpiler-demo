<?php
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");
$APPLICATION->SetTitle("BitrixVue");
?>

<?php
\Bitrix\Main\UI\Extension::load("local.demo.application");
?>

<div id="application"></div>

<script type="text/javascript">
    const application = new BX.DemoApplication('#application');
    application.run();
</script>

<?php require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php"); ?>