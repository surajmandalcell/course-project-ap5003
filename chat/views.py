from django.shortcuts import render


def chat(request):
    chats = [
        {"name": "Alice", "image": "alice.jpg"},
        {"name": "Bob", "image": "bob.jpg"},
        {"name": "Charlie", "image": "charlie.jpg"},
    ]
    messages = [
        {"sender": "Alice", "text": "Hi there!"},
        {"sender": "You", "text": "Hello!"},
        {"sender": "Alice", "text": "How are you?"},
    ]
    context = {"chats": chats, "messages": messages}
    return render(request, "chat.html", context)
