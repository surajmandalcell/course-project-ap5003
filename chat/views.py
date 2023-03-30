from django.shortcuts import render


def chat(request):
    image = "images/user.jpeg"
    chats = [
        {"name": "Alice", "image": image},
        {"name": "Bob", "image": image},
        {"name": "Charlie", "image": image},
    ]
    messages = [
        {"sender": "Alice", "text": "Hi there!"},
        {"sender": "You", "text": "Hello!"},
        {"sender": "Alice", "text": "How are you?"},
    ]
    context = {"chats": chats, "messages": messages}
    return render(request, "chat.html", context)
