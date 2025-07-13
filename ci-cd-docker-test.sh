#!/bin/bash
set -e

echo "=== Автотесты для сайта в контейнере nginx ==="

fail=false

test_url() {
    local url=$1
    local must_contain=$2
    
    echo -n "Тест: $url ..."
    
    if ! status=$(curl -s -o /dev/null -w "%{http_code}" "$url" 2>/dev/null); then
        echo " FAIL (недоступен)"
        fail=true
        return
    fi
    
    if [ "$status" != "200" ]; then
        echo " FAIL (HTTP $status)"
        fail=true
        return
    fi
    
    if [ -n "$must_contain" ]; then
        if ! curl -s "$url" | grep -q "$must_contain"; then
            echo " FAIL (нет нужного контента)"
            fail=true
            return
        fi
    fi
    
    echo " OK"
}

test_url "http://localhost:8080/"
test_url "http://localhost:8080/script.js"
test_url "http://localhost:8080/styles.css"
test_url "http://localhost:8080/lang.js"
test_url "http://localhost:8080/test-ci-cd.html"
test_url "http://localhost:8080/" "article-card"

echo
if [ "$fail" = true ]; then
    echo "❌ Некоторые автотесты не прошли!"
    exit 1
else
    echo "✅ Все автотесты прошли успешно!"
fi 