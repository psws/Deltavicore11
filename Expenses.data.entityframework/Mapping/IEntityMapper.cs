using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Expenses.common.interfaces.Data;


namespace Expenses.data.entityframework.Mapping
{
    public interface IEntityMapper
    {
        IEnumerable<IEntity> Mappings { get; }

        void MapEntities(ModelBuilder modelBuilder);
    }
}
