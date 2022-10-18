//Kategori İşlemleri
$(document).on("click", "#ktgEkle", async function () {
    const { value: formValues } = await Swal.fire({
        title: 'Kategori Ekle',
        html:
            '<input id="ktgAd" class="swal2-input">',
    })



    var ktgAd = $("#ktgAd").val();
    $.ajax({
        type: 'Post',
        url: '/Kategori/EkleJson',
        data: { "ktgAd": ktgAd },
        dataType: 'Json',
        success: function (data) {
            var ktgId = data.Result.Id;
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
});
$(document).on("click", ".guncelle", async function () {
    var ktgId = $(this).val();
    var ktgAdId = $(this).parent("td").parent("tr").find("td:first");
    var ktgAd = ktgAdId.html();
    const { value: formValues } = await Swal.fire({
        title: 'Kategori Güncelle',
        html:
            '<input id="ktgAd" value="' + ktgAd + '" class="swal2- input">',
    })
    ktgAd = $("#ktgAd").val();
        $.ajax({
            type: 'Post',
            url: '/Kategori/GuncelleJson',
            data: { "ktgId": ktgId ,"ktgAd": ktgAd },
            dataType: 'Json',
            success: function (data) {
                if (data == "1") {
                    ktgAdId.html(ktgAd);
                    Swal.fire({
                        type: 'success',
                        title: 'Kategori Guncellendi',
                        text: 'İşlem başarıyla gerçekleşti!'
                    });
                }
                else {
                    Swal.fire({
                        type: 'error',
                        title: 'Kategori Guncellenmedi',
                        text: 'Bir sorun ile karşılaşıldı!'
                    });
                }
            },
            error: function () {
                Swal.fire({
                    type: 'error',
                    title: 'Kategori Eklenmedi',
                    text: 'Bir sorun ile karşılaşıldı!'
                });
            }
        });
});
$(document).on("click", ".sil", async function () {
    var tr = $(this).parent("td").parent("tr");
    var ktgId = $(this).val();
    $.ajax({
        type: 'Post',
        url: '/Kategori/SilJson',
        data: { "ktgId": ktgId },
        dataType: 'Json',
        success: function (data) {
            if (data == "1") {
                tr.remove();
                Swal.fire({
                    type: 'success',
                    title: 'Kategori Silindi',
                    text: 'İşlem başarıyla gerçekleşti!'
                });
            }
            else {
                Swal.fire({
                    type: 'error',
                    title: 'Kategori Silinmedi',
                    text: 'Bir sorun ile karşılaşıldı!'
                });
            }
        },
        error: function () {
            Swal.fire({
                type: 'error',
                title: 'Kategori Silinmedi',
                text: 'Bir sorun ile karşılaşıldı!'
            });
        }
    });
});
//Kategori İşlemleri SON

//Yazar İşlemleri
$(document).on("click", "#yazarEkle", async function () {
    const { value: formValues } = await Swal.fire({
        title: 'Yazar Ekle',
        html:
            '<input id="yzrAd" class="swal2-input">',
    })

    var yzrAd = $("#yzrAd").val();
    $.ajax({
        type: 'Post',
        url: '/Yazar/EkleJson',
        data: { "yzrAd": yzrAd },
        dataType: 'Json',
        success: function (data) {
            var yzrId = data.Result.Id;
            var yzrAd = '<td>' + data.Result.Ad + '<td>';
            var guncelleButton = "<td><button class='guncelle btn btn-custom' value='" + yzrId + "'>Güncelle</button></td>";
            var silButton = "<td><button class='sil btn btn-danger' value='" + yzrId + "'>Sil</button></td>";
            var kitapAdet = "<td>0</td>";
            $("#example tbody").prepend('<tr>' + yzrAd + kitapAdeti + guncelleButton + silButton + '</tr>');
            Swal.fire({
                type: 'success',
                title: 'Yazar Eklendi',
                text: 'İşlem başarıyla gerçekleşti!'
            });
        },
        error: function () {
            Swal.fire({
                type: 'error',
                title: 'Yazar Eklenmedi',
                text: 'Bir sorun ile karşılaşıldı!'
            });
        }
    });
});
$(document).on("click", ".yazarsil", async function () {
    var tr = $(this).parent("td").parent("tr");
    var yazarId = $(this).val();
    $.ajax({
        type: 'Post',
        url: '/Yazar/SilJson',
        data: { "yazarId": yazarId },
        dataType: 'Json',
        success: function (data) {
            if (data == "1") {
                tr.remove();
                Swal.fire({
                    type: 'success',
                    title: 'Yazar Silindi',
                    text: 'İşlem başarıyla gerçekleşti!'
                });
            }
            else {
                Swal.fire({
                    type: 'error',
                    title: 'Yazar Silinmedi',
                    text: 'Bir sorun ile karşılaşıldı!'
                });
            }
        },
        error: function () {
            Swal.fire({
                type: 'error',
                title: 'Yazar Silinmedi',
                text: 'Bir sorun ile karşılaşıldı!'
            });
        }
    });
});
$(document).on("click", ".yazarGuncelle", async function () {
    var yzrId = $(this).val();
    var yzrAdId = $(this).parent("td").parent("tr").find("td:first");
    var yzrAd = yzrAdId.html();
    const { value: formValues } = await Swal.fire({
        title: 'Yazar Güncelle',
        html:
            '<input id="yzrAd" value="' + yzrAd + '" class="swal2- input">',
    })
    yzrAd = $("#yzrAd").val();
    $.ajax({
        type: 'Post',
        url: '/Yazar/GuncelleJson',
        data: { "yzrId": yzrId, "yzrAd": yzrAd },
        dataType: 'Json',
        success: function (data) {
            if (data == "1") {
                yzrAdId.html(yzrAd);
                Swal.fire({
                    type: 'success',
                    title: 'Yazar Guncellendi',
                    text: 'İşlem başarıyla gerçekleşti!'
                });
            }
            else {
                Swal.fire({
                    type: 'error',
                    title: 'Yazar Guncellenmedi',
                    text: 'Bir sorun ile karşılaşıldı!'
                });
            }
        },
        error: function () {
            Swal.fire({
                type: 'error',
                title: 'Yazar Eklenmedi',
                text: 'Bir sorun ile karşılaşıldı!'
            });
        }
    });
});
//Yazar İşlemleri SON

//Kitap İşlemleri
$(document).on("click", "#kategoriEkle", function () {
    var secilenKategoriAd = $("#kategoriler").val();
    var secilenId = $("#kategoriler option:selected").attr("data-id");
    $("#eklenenKategoriler").append('<div id"' + secilenId + '" class="col-md-1 bg-primary kategoriSil" style="margin-right:2px; margin-bottom:2px;">' + secilenKategoriAd + '</div>');
    $("#kategoriler option:selected").remove
});
$(document).on("click", ".kategoriSil", function () {
    var id = $(this).attr("id");
    var kategoriAd = $(this).html();
    $("#kategoriler").append('<option data-id="' + id + '">' + kategoriAd + '</option>');
    $(this).remove();
});
$(document).on("click", "#kitapKaydet", function () {
    var degerler = {
        kategoriler: [],
        yazar : $("#yazar option:selected").attr("data-id"),
        kitapAd : $("#kitapAdı").val(),
        kitapAdet : $("#kitapAdet").val(),
        siraNo : $("#siraNo").val()
    };
    $("#eklenenKategoriler div").each(function () {
        var id = $(this).attr("id");
        degerler.kategoriler.push(id);
    });

    $.ajax({
        type: 'Post',
        url: '/KitapEkleJson',
        data: JSON.stringify(degerler),
        dataType: 'JSON',
        contentType: 'application/json;charset=utf-8',
        success: function (gelenDeg) {
            if (gelenDeg == "1") {
                Swal.fire({
                    type: 'success',
                    title: 'Kitap Eklendi',
                    text: 'İşlem başarıyla gerçekleştirildi!'
                });
                }
                else if("bosOlamaz") {
                Swal.fire({
                    type: 'error',
                    title: 'Kitap Eklenmedi!',
                    text: 'Boş alanları doldurun!'
                });
            }
        },
        error: function () {
            error: function () {
                Swal.fire({
                    type: 'error',
                    title: 'Kitap Eklenmedi',
                    text: 'Bir sorun ile karşılaşıldı!'
                });
        }
    });
});
$(document).on("click", ".kitapSil", function () {
    Swal.fire({
        title: 'Siliniyor..',
        text: "Kitabı gerçekten silmek istiyor musunuz?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sil'
        cancelButtonText: 'Vazgeç'
    }).then((result) => {
        if (result.isConfirmed) {
            var kitapId = $(this).val();
            var tr = $(this).parent("td").parent("tr");

            $.ajax({
                type: 'Post',
                url: '/Kitap/SilJson',
                data: { "kitapId": kitapId },
                dataType: 'Json',
                success: function (data) {
                    if (data == "1") {
                        tr.remove();
                        Swal.fire({
                            type: 'success',
                            title: 'Kitap Silindi',
                            text: 'İşlem başarıyla gerçekleşti!'
                        });
                    }
                    else {
                        Swal.fire({
                            type: 'error',
                            title: 'Kitap Silinmedi',
                            text: 'Veri tabanında bir sorun oluştu!'
                        });
                    }
                },
                error: function () {
                    Swal.fire({
                        type: 'success',
                        title: 'Kitap Silindi',
                        text: 'Bir sorun oluştu!'
                    });
                }
            });
        }
    })
});
//Kitap İşlemleri SON
