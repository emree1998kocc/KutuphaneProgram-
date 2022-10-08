$(document).on("click", "#ktgEkle", async function () {
    const { value: formValues } = await Swal.fire({
        title: 'Kategori Ekle',
        html:
            '<input id="ktgAd" class="swal2-input">',
    })

    if (formValues) {
        var ktgAd = $("#ktgAd").val();
        $.ajax({
            type: 'Post',
            url: '/Kategori/EkleJson',
            data: { "ktgAd": ktgAd },
            dataType: 'Json',
            success: function (data) {
                var ktgId = '<td>' + data.Result.Id + '<td>';
                var ktgAd = '<td>' + data.Result.Ad + '<td>';
                var guncelleButton = "<td><button class='guncelle btn btn-custom' value='" + ktgId + "'>Güncelle</button></td>";
                var silButton = "<td><button class='sil btn btn-danger' value='" + ktgId + "'>Sil</button></td>";
                var kitapAdet = "<td>0</td>";
                $("#example tbody").prepend('<tr>' + ktgAd + kitapAdeti + guncelleButton + silButton + '</tr>');
                Swal.fire({
                    type: 'success',
                    title: 'Kategori Eklendi',
                    text: 'İşlem başarıyla gerçekleşti!'
                });
            },
            error: function () {
                Swal.fire({
                    type: 'error',
                    title: 'Kategori Eklenmedi',
                    text: 'Bir sorun ile karşılaşıldı!'
                });
            }
        });
    }
});