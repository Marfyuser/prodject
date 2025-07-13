# Автотесты для сайта в контейнере nginx
# Запуск: ./ci-cd-docker-test.ps1

$fail = $false

function Test-Url($url, $mustContain = $null) {
    Write-Host "Тест: $url ..." -NoNewline
    try {
        $resp = Invoke-WebRequest -Uri $url -UseBasicParsing -ErrorAction Stop
        if ($resp.StatusCode -ne 200) {
            Write-Host " FAIL (HTTP $($resp.StatusCode))" -ForegroundColor Red
            $global:fail = $true
            return
        }
        if ($mustContain -and ($resp.Content -notmatch $mustContain)) {
            Write-Host " FAIL (нет нужного контента)" -ForegroundColor Red
            $global:fail = $true
            return
        }
        Write-Host " OK" -ForegroundColor Green
    } catch {
        Write-Host " FAIL ($_ )" -ForegroundColor Red
        $global:fail = $true
    }
}

Test-Url "http://localhost:8080/"
Test-Url "http://localhost:8080/script.js"
Test-Url "http://localhost:8080/styles.css"
Test-Url "http://localhost:8080/lang.js"
Test-Url "http://localhost:8080/test-ci-cd.html"
Test-Url "http://localhost:8080/" "<div class=\"article-card\""

if ($fail) {
    Write-Host "`n❌ Некоторые автотесты не прошли!" -ForegroundColor Red
    exit 1
} else {
    Write-Host "`n✅ Все автотесты прошли успешно!" -ForegroundColor Green
} 