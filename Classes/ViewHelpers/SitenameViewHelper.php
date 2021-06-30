<?php

namespace Stackfactory\Sitepackage\Viewhelpers;

use TYPO3\CMS\Core\Core\SystemEnvironmentBuilder;
use TYPO3Fluid\Fluid\Core\Rendering\RenderingContextInterface;
use TYPO3Fluid\Fluid\Core\ViewHelper\AbstractViewHelper;


class SitenameViewHelper extends AbstractViewHelper
{
   public static function render(
       array $arguments,
       \Closure $renderChildrenClosure,
       RenderingContextInterface $renderingContext
   ) {
    \TYPO3\CMS\Core\Utility\DebugUtility::var_dump($GLOBALS); 
   }
}