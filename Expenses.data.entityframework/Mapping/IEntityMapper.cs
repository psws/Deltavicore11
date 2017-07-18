using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Expenses.core.DataLayer.DbModels;


namespace Expenses.data.entityframework.Mapping
{
    public interface IEntityMapper
    {
        IEnumerable<IEntity> Mappings { get; }

        void MapEntities(ModelBuilder modelBuilder);
    }
}
