Add-Type -AssemblyName System.Drawing
$src = 'c:\project\getporing\assets\logo.png'
$dst = 'c:\project\getporing\assets\logo_cropped.png'
$img = [System.Drawing.Image]::FromFile($src)
$bmp = New-Object System.Drawing.Bitmap $img
$w = $bmp.Width
$h = $bmp.Height
$minX = $w; $maxX = 0; $minY = $h; $maxY = 0
for ($y = 0; $y -lt $h; $y++) {
  for ($x = 0; $x -lt $w; $x++) {
    $px = $bmp.GetPixel($x, $y)
    $isWhite = ($px.R -gt 245 -and $px.G -gt 245 -and $px.B -gt 245)
    if ($px.A -gt 10 -and (-not $isWhite)) {
      if ($x -lt $minX) { $minX = $x }
      if ($x -gt $maxX) { $maxX = $x }
      if ($y -lt $minY) { $minY = $y }
      if ($y -gt $maxY) { $maxY = $y }
    }
  }
}
$pad = 24
$x0 = [Math]::Max(0, $minX - $pad)
$y0 = [Math]::Max(0, $minY - $pad)
$x1 = [Math]::Min($w - 1, $maxX + $pad)
$y1 = [Math]::Min($h - 1, $maxY + $pad)
$cw = $x1 - $x0
$ch = $y1 - $y0
Write-Host ("Original: " + $w + "x" + $h + "  Crop: " + $cw + "x" + $ch)
$rect = New-Object System.Drawing.Rectangle($x0, $y0, $cw, $ch)
$cropped = $bmp.Clone($rect, $bmp.PixelFormat)
$cropped.Save($dst, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
$img.Dispose()
$cropped.Dispose()
Write-Host "Done: logo_cropped.png saved"
