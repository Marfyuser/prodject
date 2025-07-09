import speech_recognition as sr
import pyperclip

recognizer = sr.Recognizer()
mic = sr.Microphone()

print("Говорите в микрофон. Для завершения — Ctrl+C.")

while True:
    with mic as source:
        print("Слушаю...")
        audio = recognizer.listen(source)
    try:
        text = recognizer.recognize_google(audio, language="ru-RU")
        print(f"Распознано: {text}")
        pyperclip.copy(text)
        print("Текст скопирован в буфер обмена! Вставьте его в чат (Ctrl+V).")
    except Exception as e:
        print("Ошибка распознавания:", e) 