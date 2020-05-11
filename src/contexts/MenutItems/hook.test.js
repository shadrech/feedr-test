import Adapter from 'enzyme-adapter-react-16'
import { act } from 'react-dom/test-utils'
import { configure } from 'enzyme';
import useMenuItem from './hook'
import data from './items';
import { testHook } from '../../testUtils';

configure({ adapter: new Adapter() });

describe('useMenuItem()', () => {

  let hook
  beforeEach(() => {
    testHook(() => {
      hook = useMenuItem()
    })
  })

  it('should return items and helper methods', () => {
    expect(hook).toMatchObject({
      unselectedItems: data,
      selectedItems: [],
      selectItem: expect.any(Function),
      unselectItem: expect.any(Function),
      removeSelectedItem: expect.any(Function)
    })
  })

  it('should move an item from unselected to selected if selectItem() is called', () => {
    act(() => {
      hook.selectItem(1, 0)
    })
    expect(hook.unselectedItems).toHaveLength(19)
    expect(hook.selectedItems).toHaveLength(1)
    expect(hook.selectedItems[0]).toEqual(data[1])
  })

  it('should move an item from selected to unselected if unselectItem() is called', () => {
    act(() => {
      hook.selectItem(0, 0)
    })
    act(() => {
      hook.unselectItem(0, 0)
    })
    expect(hook.selectedItems).toHaveLength(0)
    expect(hook.unselectedItems).toHaveLength(20)
  })

  it('should move an item from selected to unselected if removeSelectedItem() is called', () => {
    act(() => {
      hook.selectItem(0, 0)
    })
    act(() => {
      hook.removeSelectedItem(0)
    })
    expect(hook.selectedItems).toHaveLength(0)
    expect(hook.unselectedItems).toHaveLength(20)
  })

})
