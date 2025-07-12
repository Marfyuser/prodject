import librosa
import requests

# === Настройки ===
AUDIO_FILE = 'your_music.mp3'  # Укажите путь к вашему аудиофайлу
GIPHY_API_KEY = 'EJ0QKhcaI4moWR2WF3ltaxT1gUEKy8DD'  # Ваш API ключ
GIF_QUERY = 'party'  # или 'music', 'celebration', 'happy' и т.д.
GIF_LIMIT = 5  # Сколько гифок искать

# === Анализ музыки ===
print('Загружаю аудиофайл...')
y, sr = librosa.load(AUDIO_FILE)
tempo, _ = librosa.beat.beat_track(y=y, sr=sr)
print(f'Темп музыки: {tempo:.2f} BPM')

# === Получение гифок с Giphy ===
def get_gif_urls(query, api_key, limit=5):
    url = f'https://api.giphy.com/v1/gifs/search?api_key={api_key}&q={query}&limit={limit}'
    response = requests.get(url).json()
    return [item['images']['original']['url'] for item in response['data']]

print(f'Ищу гифки по запросу: {GIF_QUERY}')
gif_urls = get_gif_urls(GIF_QUERY, GIPHY_API_KEY, GIF_LIMIT)

print('Найденные гифки:')
for url in gif_urls:
    print(url)

# === Дальнейшие шаги ===
# Можно скачать гифки, собрать из них видеоряд и наложить музыку (moviepy/ffmpeg)
# Этот скрипт — базовый пример для старта 