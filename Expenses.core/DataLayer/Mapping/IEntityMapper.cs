using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Expenses.core.DataLayer.DbModels;


namespace Expenses.core.DataLayer.Mapping
{
    public interface IEntityMapper
    {
        IEnumerable<IEntity> Mappings { get; }

        void MapEntities(ModelBuilder modelBuilder);
    }
}
