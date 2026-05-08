from django.db import models

class Booking(models.Model):
    name = models.CharField(max_length=100)
    contact = models.CharField(max_length=15)
    age = models.IntegerField()
    gender = models.CharField(max_length=10)
    checkin = models.DateField()
    checkout = models.DateField()
    members = models.IntegerField()
    room_type = models.CharField(max_length=50)

    id_proof = models.FileField(upload_to='id_proofs/', null=True, blank=True)
    no_of_rooms = models.IntegerField(default=1)
    message = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.name
