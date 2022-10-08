using KutuphaneProgramı.Data.Repositories;
using System;

namespace KutuphaneProgramı.Data.UnitOfWork
{
    public interface IUnitOfWork : IDisposable
    {
        IRepository<T> GetRepository<T>() where T : class;

        int SaveChanges();
    }
}
