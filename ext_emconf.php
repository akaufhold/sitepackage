<?php

/**
 * Extension Manager/Repository config file for ext "sitepackage".
 */
$EM_CONF[$_EXTKEY] = [
    'title' => 'Sitepackage',
    'description' => '',
    'category' => 'templates',
    'constraints' => [
        'depends' => [
            'typo3' => '10.2.0-11.5.99',
            'fluid_styled_content' => '10.2.0-11.5.99',
            'rte_ckeditor' => '10.2.0-11.5.99',
            'b13/container' => '1.3.0-1.5.0',
        ],
        'conflicts' => [
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'Stackfactory\\Sitepackage\\' => 'Classes',
        ],
    ],
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Andreas Kaufhold',
    'author_email' => 'info@stackfactory.de',
    'author_company' => 'Stackfactory',
    'version' => '1.0.0',
];
