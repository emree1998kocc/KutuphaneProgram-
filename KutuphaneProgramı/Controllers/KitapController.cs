using KutuphaneProgrami.Data.Model;
using KutuphaneProgramı.Data.UnitOfWork;
using System.Web.Mvc;

namespace KutuphaneProgramı.Controllers
{
    public class KitapController : Controller
    {

        UnitOfWork unitOfWork;

        public KitapController()
        {
            unitOfWork = new UnitOfWork();
        }

        public ActionResult Index()
        {
            var kitaplar = unitOfWork.GetRepository<Kitap>().GetAll();
            return View(kitaplar);
        }
    }
}