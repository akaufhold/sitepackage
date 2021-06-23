<?php
defined('TYPO3_MODE') || die();

if (TYPO3_MODE === 'BE') {
    $GLOBALS['TBE_STYLES']['skins']['sitepackage']['name'] = 'sitepackage';
    $GLOBALS['TBE_STYLES']['skins']['sitepackage']['stylesheetDirectories'][] = 'EXT:sitepackage/Resources/Public/Css/Backend/';
}