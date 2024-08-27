import socket

# Konfigurasi host dan port
host = 'localhost'
port = 12345

# Membuat socket
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Binding host dan port ke socket
server_socket.bind((host, port))

# Menunggu koneksi dari client
server_socket.listen(1)
print('Server berjalan dan siap menerima koneksi...')

# Menerima koneksi dari client
client_socket, addr = server_socket.accept()
print('Client terhubung:', addr)

while True:
    # Menerima pesan dari client
    data = client_socket.recv(1024).decode()

    if not data:
        # Jika tidak ada data, koneksi ditutup
        print('Koneksi ditutup oleh client.')
        break

    # Mencetak pesan yang diterima
    print('Pesan dari client:', data)

# Menutup socket
client_socket.close()
server_socket.close()