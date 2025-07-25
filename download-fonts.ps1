$fonts = @(
    @{ name = "Poppins-Regular"; weight = "400" },
    @{ name = "Poppins-Medium"; weight = "500" },
    @{ name = "Poppins-SemiBold"; weight = "600" }
)

$fontsDir = "public/fonts"
if (-not (Test-Path $fontsDir)) {
    New-Item -ItemType Directory -Path $fontsDir -Force
}

foreach ($font in $fonts) {
    $url = "https://fonts.googleapis.com/css2?family=Poppins:wght@$($font.weight)&display=swap"
    $css = Invoke-WebRequest -Uri $url
    $fontUrl = [regex]::Match($css.Content, 'src: url\((.*?)\)').Groups[1].Value
    
    $outputPath = "$fontsDir/$($font.name).woff2"
    Invoke-WebRequest -Uri $fontUrl -OutFile $outputPath
    Write-Host "Downloaded $($font.name).woff2"
} 