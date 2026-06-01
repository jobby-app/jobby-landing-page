# Wyślij zaproszenia beta do wszystkich niezaproszonych z waitlisty.
# Użycie (PowerShell):
#   $env:API_URL="https://getjobby.pl"
#   $env:ADMIN_SECRET="twoj-sekret"
#   .\scripts\send-beta-invites.ps1
#
# Dry run (tylko liczba oczekujących):
#   .\scripts\send-beta-invites.ps1 -DryRun

param(
    [switch]$DryRun
)

$ApiUrl = if ($env:API_URL) { $env:API_URL.TrimEnd('/') } else { "http://localhost:3000" }
$AdminSecret = $env:ADMIN_SECRET

if (-not $AdminSecret) {
    Write-Error "Ustaw zmienną ADMIN_SECRET"
    exit 1
}

$uri = "$ApiUrl/api/waitlist/send-beta-invites"
if ($DryRun) { $uri += "?dry_run=true" }

$response = Invoke-RestMethod -Uri $uri -Method POST -Headers @{
    Authorization = "Bearer $AdminSecret"
    "Content-Type" = "application/json"
}

$response | ConvertTo-Json -Depth 5
