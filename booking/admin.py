from django.contrib import admin
from django.utils.html import format_html
from .models import Booking


class BookingAdmin(admin.ModelAdmin):
    list_display = (
        'name',
        'contact',
        'room_type',
        'no_of_rooms',
        'view_id_proof',
    )

    def view_id_proof(self, obj):
        if obj.id_proof:
            return format_html(
                "<a href='{}' target='_blank'>View File</a>",
                obj.id_proof.url
            )
        return "No File"

    view_id_proof.short_description = "ID Proof"


admin.site.register(Booking, BookingAdmin)
