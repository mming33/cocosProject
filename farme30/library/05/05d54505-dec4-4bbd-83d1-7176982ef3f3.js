System.register(["cce.code-quality.cr", "cc", "../../../Common/Game/MyComponent.js", "./Floor.js", "./FloorType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, instantiate, Node, Prefab, Vec3, _decorator, MyComponent, Floor, FloorType, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3, _temp, _crd, ccclass, property, FloorManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMyComponent(extras) {
    _reporterNs.report("MyComponent", "../../../Common/Game/MyComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFloor(extras) {
    _reporterNs.report("Floor", "./Floor", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFloorType(extras) {
    _reporterNs.report("FloorType", "./FloorType", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _class3: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cceCodeQualityCr) {
      _reporterNs = _cceCodeQualityCr;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_CommonGameMyComponentJs) {
      MyComponent = _CommonGameMyComponentJs.MyComponent;
    }, function (_FloorJs) {
      Floor = _FloorJs.Floor;
    }, function (_FloorTypeJs) {
      FloorType = _FloorTypeJs.FloorType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "05d54UF3sRLvYPRcXaYLvPz", "FloorMananger", _context.meta);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("FloorManager", FloorManager = (_dec = ccclass('FloorManager'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_ref) {
        _inheritsLoose(FloorManager, _ref);

        function FloorManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _ref.call.apply(_ref, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "floorPrefabs", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "Camera", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "Player", _descriptor3, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "allFloors", []);

          _defineProperty(_assertThisInitialized(_this), "data", {
            Level1: {
              floorData: "111111111111111111111111",
              floorDirectionData: "111333222333111111111444",
              doorData: "000000000000000000000000"
            }
          });

          _defineProperty(_assertThisInitialized(_this), "movespeed", 3);

          _defineProperty(_assertThisInitialized(_this), "moveSpeedx", 0);

          _defineProperty(_assertThisInitialized(_this), "moveSpeedz", 0);

          _defineProperty(_assertThisInitialized(_this), "nowFloorIndex", 0);

          _defineProperty(_assertThisInitialized(_this), "cameraAngle", 0);

          return _this;
        }

        var _proto = FloorManager.prototype;

        _proto.onLoad = function onLoad() {
          FloorManager.I = this.node.getComponent(FloorManager);
        };

        _proto.Init = function Init() {
          // let door = this.CreateFloor(10001);
          // if (door) {
          //     this.node.addChild(door);
          //     door.position = new Vec3(0, 0, 0)
          // }
          this.CreateFloorForJson(this.data);
        };

        _proto.CreateFloor = function CreateFloor(FloorID) {
          for (var i = 0; i < this.floorPrefabs.length; i++) {
            var element = this.floorPrefabs[i].data.getComponent(_crd && Floor === void 0 ? (_reportPossibleCrUseOfFloor({
              error: Error()
            }), Floor) : Floor);

            if (element.ID == FloorID) {
              var floor = instantiate(this.floorPrefabs[i]);
              this.allFloors.push(floor.getComponent(_crd && Floor === void 0 ? (_reportPossibleCrUseOfFloor({
                error: Error()
              }), Floor) : Floor));
              return floor;
            }
          }

          console.error("创建地板失败,不存在ID为:", FloorID, "的地板,请检查后重试!");
          return null;
        };

        _proto.CreateFloorForJson = function CreateFloorForJson(json) {
          // json = this.data;
          var node = this.node;
          var x = 0;
          var z = 0;

          for (var i = 0; i < json.Level1.floorData.length; i++) {
            var element = json.Level1.floorData[i];
            var id = Number(element) + 10000;
            var floorNode = this.CreateFloor(id);

            if (floorNode) {
              var type = this.SetNewFloorTypeData(floorNode, json, i);

              if (i == 0) {
                floorNode.setWorldPosition(0, 0, 0);
              } else {
                var _this$SetFloorNodePos = this.SetFloorNodePosition(type, z, floorNode, x);

                z = _this$SetFloorNodePos.z;
                x = _this$SetFloorNodePos.x;
              }

              node.addChild(floorNode);
            }
          }
        };

        _proto.SetFloorNodePosition = function SetFloorNodePosition(type, z, floorNode, x) {
          switch (type) {
            case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
              error: Error()
            }), FloorType) : FloorType).FRONT:
              z = z - 3;
              floorNode.setWorldPosition(x, 0, z);
              break;

            case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
              error: Error()
            }), FloorType) : FloorType).BACK:
              z = z + 3;
              floorNode.setWorldPosition(x, 0, z);
              break;

            case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
              error: Error()
            }), FloorType) : FloorType).LEFT:
              x = x - 3;
              floorNode.setWorldPosition(x, 0, z);
              break;

            case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
              error: Error()
            }), FloorType) : FloorType).RIGHT:
              x = x + 3;
              floorNode.setWorldPosition(x, 0, z);
              break;

            default:
              break;
          }

          return {
            z: z,
            x: x
          };
        }
        /**创建时根据json数据设置新地板的方向属性 */
        ;

        _proto.SetNewFloorTypeData = function SetNewFloorTypeData(floorNode, json, i) {
          var floor = floorNode.getComponent(_crd && Floor === void 0 ? (_reportPossibleCrUseOfFloor({
            error: Error()
          }), Floor) : Floor);

          if (floor) {
            switch (json.Level1.floorDirectionData[i]) {
              case '1':
                floor.floorType = (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).FRONT;
                break;

              case '2':
                floor.floorType = (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).BACK;
                break;

              case '3':
                floor.floorType = (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).LEFT;
                break;

              case '4':
                floor.floorType = (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).RIGHT;
                break;

              default:
                throw new Error("找不到类型:" + json.Level1.floorDirectionData[i]);
            }

            return floor.floorType;
          }

          throw new Error("找不到类型:" + json.Level1.floorDirectionData[i]);
        };

        _proto.RemoveFloor = function RemoveFloor() {
          this.floorPrefabs.splice(0, 1);
        };

        _proto.onUpDate = function onUpDate(dt) {
          this.MoveFloor(dt);
        };

        _proto.MoveFloor = function MoveFloor(dt) {
          var _this$Camera, _this$Camera2, _this$Player;

          if (!this.allFloors[this.nowFloorIndex]) return;

          if (!this.allFloors[this.nowFloorIndex].IsNowFloor()) {
            this.nowFloorIndex++;
          } //若下个结点存在 并且与当前结点的类型不同


          if (this.nowFloorIndex + 1 < this.allFloors.length && this.allFloors[this.nowFloorIndex + 1].floorType != this.allFloors[this.nowFloorIndex].floorType) {
            //应该转向
            if (Vec3.distance(this.allFloors[this.nowFloorIndex].node.worldPosition, new Vec3(0, 0, 0)) < 0.1) {
              switch (this.allFloors[this.nowFloorIndex + 1].floorType) {
                case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).FRONT:
                  this.MoveFront();
                  break;

                case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).BACK:
                  this.MoveBack();
                  break;

                case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).LEFT:
                  this.MoveLeft();
                  break;

                case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).RIGHT:
                  this.MoveRight();
                  break;

                default:
                  this.MoveStop();
                  break;
              }
            } //转摄像头


            switch (this.allFloors[this.nowFloorIndex + 1].floorType) {
              case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                error: Error()
              }), FloorType) : FloorType).FRONT:
                this.cameraAngle = 0;
                break;

              case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                error: Error()
              }), FloorType) : FloorType).BACK:
                this.cameraAngle = 180;
                break;

              case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                error: Error()
              }), FloorType) : FloorType).LEFT:
                this.cameraAngle = 90;
                break;

              case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                error: Error()
              }), FloorType) : FloorType).RIGHT:
                this.cameraAngle = -90;
                break;
            }
          }

          var out = new Vec3(0, 0, 0);
          var angle = new Vec3(0, 0, 0);
          (_this$Camera = this.Camera) === null || _this$Camera === void 0 ? void 0 : _this$Camera.getWorldRotation().getEulerAngles(angle);
          console.log(angle);
          Vec3.lerp(out, angle, new Vec3(0, this.cameraAngle, 0), 0.1); // console.log(angle);

          (_this$Camera2 = this.Camera) === null || _this$Camera2 === void 0 ? void 0 : _this$Camera2.setRotationFromEuler(out.x, out.y, out.z);
          (_this$Player = this.Player) === null || _this$Player === void 0 ? void 0 : _this$Player.setRotationFromEuler(out.x, out.y, out.z);

          for (var i = 0; i < this.allFloors.length; i++) {
            var element = this.allFloors[i];
            element.node.setWorldPosition(element.node.worldPosition.x + this.moveSpeedx * this.movespeed * dt, 0, element.node.worldPosition.z + this.moveSpeedz * this.movespeed * dt);
          }
        };

        _proto.MoveFront = function MoveFront() {
          this.moveSpeedx = 0;
          this.moveSpeedz = 1;
        };

        _proto.MoveBack = function MoveBack() {
          this.moveSpeedx = 0;
          this.moveSpeedz = -1;
        };

        _proto.MoveLeft = function MoveLeft() {
          this.moveSpeedx = 1;
          this.moveSpeedz = 0;
        };

        _proto.MoveRight = function MoveRight() {
          this.moveSpeedx = -1;
          this.moveSpeedz = 0;
        };

        _proto.MoveStop = function MoveStop() {
          this.moveSpeedx = 0;
          this.moveSpeedz = 0;
        };

        return FloorManager;
      }(_crd && MyComponent === void 0 ? (_reportPossibleCrUseOfMyComponent({
        error: Error()
      }), MyComponent) : MyComponent), _defineProperty(_class3, "I", void 0), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "floorPrefabs", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Camera", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Player", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL0dhbWUvRG9vci9GbG9vck1hbmFuZ2VyLnRzIl0sIm5hbWVzIjpbImluc3RhbnRpYXRlIiwiTm9kZSIsIlByZWZhYiIsIlZlYzMiLCJfZGVjb3JhdG9yIiwiTXlDb21wb25lbnQiLCJGbG9vciIsIkZsb29yVHlwZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkZsb29yTWFuYWdlciIsIkxldmVsMSIsImZsb29yRGF0YSIsImZsb29yRGlyZWN0aW9uRGF0YSIsImRvb3JEYXRhIiwib25Mb2FkIiwiSSIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJJbml0IiwiQ3JlYXRlRmxvb3JGb3JKc29uIiwiZGF0YSIsIkNyZWF0ZUZsb29yIiwiRmxvb3JJRCIsImkiLCJmbG9vclByZWZhYnMiLCJsZW5ndGgiLCJlbGVtZW50IiwiSUQiLCJmbG9vciIsImFsbEZsb29ycyIsInB1c2giLCJjb25zb2xlIiwiZXJyb3IiLCJqc29uIiwieCIsInoiLCJpZCIsIk51bWJlciIsImZsb29yTm9kZSIsInR5cGUiLCJTZXROZXdGbG9vclR5cGVEYXRhIiwic2V0V29ybGRQb3NpdGlvbiIsIlNldEZsb29yTm9kZVBvc2l0aW9uIiwiYWRkQ2hpbGQiLCJGUk9OVCIsIkJBQ0siLCJMRUZUIiwiUklHSFQiLCJmbG9vclR5cGUiLCJFcnJvciIsIlJlbW92ZUZsb29yIiwic3BsaWNlIiwib25VcERhdGUiLCJkdCIsIk1vdmVGbG9vciIsIm5vd0Zsb29ySW5kZXgiLCJJc05vd0Zsb29yIiwiZGlzdGFuY2UiLCJ3b3JsZFBvc2l0aW9uIiwiTW92ZUZyb250IiwiTW92ZUJhY2siLCJNb3ZlTGVmdCIsIk1vdmVSaWdodCIsIk1vdmVTdG9wIiwiY2FtZXJhQW5nbGUiLCJvdXQiLCJhbmdsZSIsIkNhbWVyYSIsImdldFdvcmxkUm90YXRpb24iLCJnZXRFdWxlckFuZ2xlcyIsImxvZyIsImxlcnAiLCJzZXRSb3RhdGlvbkZyb21FdWxlciIsInkiLCJQbGF5ZXIiLCJtb3ZlU3BlZWR4IiwibW92ZXNwZWVkIiwibW92ZVNwZWVkeiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtDQSxNQUFBQSxXLE9BQUFBLFc7QUFBYUMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLE0sT0FBQUEsTTtBQUF1Q0MsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLFUsT0FBQUEsVTs7QUFFekZDLE1BQUFBLFcsNEJBQUFBLFc7O0FBR0FDLE1BQUFBLEssWUFBQUEsSzs7QUFDQUMsTUFBQUEsUyxnQkFBQUEsUzs7Ozs7OztBQUVEQyxNQUFBQSxPLEdBQXNCSixVLENBQXRCSSxPO0FBQVNDLE1BQUFBLFEsR0FBYUwsVSxDQUFiSyxROzs4QkFHSkMsWSxXQURaRixPQUFPLENBQUMsY0FBRCxDLFVBSUhDLFFBQVEsQ0FBQ1AsTUFBRCxDLFVBRVJPLFFBQVEsQ0FBQ1IsSUFBRCxDLFVBRVJRLFFBQVEsQ0FBQ1IsSUFBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0VBRVksRTs7aUVBRWQ7QUFDSFUsWUFBQUEsTUFBTSxFQUFFO0FBQ0pDLGNBQUFBLFNBQVMsRUFBRSwwQkFEUDtBQUVKQyxjQUFBQSxrQkFBa0IsRUFBRSwwQkFGaEI7QUFHSkMsY0FBQUEsUUFBUSxFQUFFO0FBSE47QUFETCxXOztzRUEwR2EsQzs7dUVBQ0MsQzs7dUVBQ0EsQzs7MEVBQ0csQzs7d0VBQ0YsQzs7Ozs7OztlQXRHdEJDLE0sR0FBQSxrQkFBUztBQUNMTCxVQUFBQSxZQUFZLENBQUNNLENBQWIsR0FBaUIsS0FBS0MsSUFBTCxDQUFVQyxZQUFWLENBQXVCUixZQUF2QixDQUFqQjtBQUNILFM7O2VBQ0RTLEksR0FBQSxnQkFBTztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFLQyxrQkFBTCxDQUF3QixLQUFLQyxJQUE3QjtBQUNILFM7O2VBRURD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QUFMLEdBQWtCLENBQWxCO0FBQ0EsZUFBS0UsVUFBTCxHQUFrQixDQUFDLENBQW5CO0FBQ0gsUzs7ZUFDRGhCLFEsR0FBQSxvQkFBVztBQUNQLGVBQUtjLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSxlQUFLRSxVQUFMLEdBQWtCLENBQWxCO0FBQ0gsUzs7ZUFDRGYsUyxHQUFBLHFCQUFZO0FBQ1IsZUFBS2EsVUFBTCxHQUFrQixDQUFDLENBQW5CO0FBQ0EsZUFBS0UsVUFBTCxHQUFrQixDQUFsQjtBQUNILFM7O2VBQ0RkLFEsR0FBQSxvQkFBVztBQUNQLGVBQUtZLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSxlQUFLRSxVQUFMLEdBQWtCLENBQWxCO0FBQ0gsUzs7Ozs7Ozs7OztpQkEzTXdCLEU7Ozs7Ozs7aUJBRUgsSTs7Ozs7OztpQkFFQSxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ0NDbGFzcywgZGlyZWN0b3IsIEVudW0sIGluc3RhbnRpYXRlLCBOb2RlLCBQcmVmYWIsIFF1YXQsIFN5c3RlbSwgc3lzdGVtRXZlbnQsIHYzLCBWZWMzLCBfZGVjb3JhdG9yIH0gZnJvbSBcImNjXCI7XG5pbXBvcnQgeyBERUJVRywgRURJVE9SIH0gZnJvbSBcImNjZS5lbnZcIjtcbmltcG9ydCB7IE15Q29tcG9uZW50IH0gZnJvbSBcIi4uLy4uLy4uL0NvbW1vbi9HYW1lL015Q29tcG9uZW50XCI7XG5pbXBvcnQgeyBEb29yIH0gZnJvbSBcIi4vRG9vclwiO1xuaW1wb3J0IHsgRG9vclR5cGUgfSBmcm9tIFwiLi9Eb29yVHlwZVwiO1xuaW1wb3J0IHsgRmxvb3IgfSBmcm9tIFwiLi9GbG9vclwiO1xuaW1wb3J0IHsgRmxvb3JUeXBlIH0gZnJvbSBcIi4vRmxvb3JUeXBlXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdGbG9vck1hbmFnZXInKVxuZXhwb3J0IGNsYXNzIEZsb29yTWFuYWdlciBleHRlbmRzIE15Q29tcG9uZW50IHtcblxuICAgIHN0YXRpYyBJOiBGbG9vck1hbmFnZXI7XG4gICAgQHByb3BlcnR5KFByZWZhYilcbiAgICBmbG9vclByZWZhYnM6IFByZWZhYltdID0gW107XG4gICAgQHByb3BlcnR5KE5vZGUpXG4gICAgQ2FtZXJhOiBOb2RlIHwgbnVsbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KE5vZGUpXG4gICAgUGxheWVyOiBOb2RlIHwgbnVsbCA9IG51bGw7XG4gICAgYWxsRmxvb3JzOiBGbG9vcltdID0gW107XG5cbiAgICBkYXRhID0ge1xuICAgICAgICBMZXZlbDE6IHtcbiAgICAgICAgICAgIGZsb29yRGF0YTogXCIxMTExMTExMTExMTExMTExMTExMTExMTFcIixcbiAgICAgICAgICAgIGZsb29yRGlyZWN0aW9uRGF0YTogXCIxMTEzMzMyMjIzMzMxMTExMTExMTE0NDRcIixcbiAgICAgICAgICAgIGRvb3JEYXRhOiBcIjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMFwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIEZsb29yTWFuYWdlci5JID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChGbG9vck1hbmFnZXIpIGFzIEZsb29yTWFuYWdlcjtcbiAgICB9XG4gICAgSW5pdCgpIHtcbiAgICAgICAgLy8gbGV0IGRvb3IgPSB0aGlzLkNyZWF0ZUZsb29yKDEwMDAxKTtcbiAgICAgICAgLy8gaWYgKGRvb3IpIHtcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5hZGRDaGlsZChkb29yKTtcbiAgICAgICAgLy8gICAgIGRvb3IucG9zaXRpb24gPSBuZXcgVmVjMygwLCAwLCAwKVxuICAgICAgICAvLyB9XG4gICAgICAgIHRoaXMuQ3JlYXRlRmxvb3JGb3JKc29uKHRoaXMuZGF0YSk7XG4gICAgfVxuXG4gICAgQ3JlYXRlRmxvb3IoRmxvb3JJRDogbnVtYmVyKTogTm9kZSB8IG51bGwge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZmxvb3JQcmVmYWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gKHRoaXMuZmxvb3JQcmVmYWJzW2ldLmRhdGEgYXMgTm9kZSkuZ2V0Q29tcG9uZW50KEZsb29yKSBhcyBGbG9vcjtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LklEID09IEZsb29ySUQpIHtcbiAgICAgICAgICAgICAgICBsZXQgZmxvb3IgPSBpbnN0YW50aWF0ZSh0aGlzLmZsb29yUHJlZmFic1tpXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGxGbG9vcnMucHVzaChmbG9vci5nZXRDb21wb25lbnQoRmxvb3IpIGFzIEZsb29yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmxvb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5lcnJvcihcIuWIm+W7uuWcsOadv+Wksei0pSzkuI3lrZjlnKhJROS4ujpcIiwgRmxvb3JJRCwgXCLnmoTlnLDmnb8s6K+35qOA5p+l5ZCO6YeN6K+VIVwiKTtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgQ3JlYXRlRmxvb3JGb3JKc29uKGpzb246IGFueSkge1xuICAgICAgICAvLyBqc29uID0gdGhpcy5kYXRhO1xuICAgICAgICBsZXQgbm9kZSA9IHRoaXMubm9kZTtcbiAgICAgICAgbGV0IHggPSAwO1xuICAgICAgICBsZXQgeiA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwganNvbi5MZXZlbDEuZmxvb3JEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0ganNvbi5MZXZlbDEuZmxvb3JEYXRhW2ldO1xuICAgICAgICAgICAgY29uc3QgaWQgPSBOdW1iZXIoZWxlbWVudCkgKyAxMDAwMDtcbiAgICAgICAgICAgIGxldCBmbG9vck5vZGUgPSB0aGlzLkNyZWF0ZUZsb29yKGlkKTtcbiAgICAgICAgICAgIGlmIChmbG9vck5vZGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgdHlwZSA9IHRoaXMuU2V0TmV3Rmxvb3JUeXBlRGF0YShmbG9vck5vZGUsIGpzb24sIGkpO1xuICAgICAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZmxvb3JOb2RlLnNldFdvcmxkUG9zaXRpb24oMCwgMCwgMCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgKHsgeiwgeCB9ID0gdGhpcy5TZXRGbG9vck5vZGVQb3NpdGlvbih0eXBlLCB6LCBmbG9vck5vZGUsIHgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbm9kZS5hZGRDaGlsZChmbG9vck5vZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIFNldEZsb29yTm9kZVBvc2l0aW9uKHR5cGU6IEZsb29yVHlwZSwgejogbnVtYmVyLCBmbG9vck5vZGU6IE5vZGUsIHg6IG51bWJlcikge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgRmxvb3JUeXBlLkZST05UOlxuICAgICAgICAgICAgICAgIHogPSB6IC0gMztcbiAgICAgICAgICAgICAgICBmbG9vck5vZGUuc2V0V29ybGRQb3NpdGlvbih4LCAwLCB6KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRmxvb3JUeXBlLkJBQ0s6XG4gICAgICAgICAgICAgICAgeiA9IHogKyAzO1xuICAgICAgICAgICAgICAgIGZsb29yTm9kZS5zZXRXb3JsZFBvc2l0aW9uKHgsIDAsIHopO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBGbG9vclR5cGUuTEVGVDpcbiAgICAgICAgICAgICAgICB4ID0geCAtIDM7XG4gICAgICAgICAgICAgICAgZmxvb3JOb2RlLnNldFdvcmxkUG9zaXRpb24oeCwgMCwgeik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEZsb29yVHlwZS5SSUdIVDpcbiAgICAgICAgICAgICAgICB4ID0geCArIDM7XG4gICAgICAgICAgICAgICAgZmxvb3JOb2RlLnNldFdvcmxkUG9zaXRpb24oeCwgMCwgeik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHosIHggfTtcbiAgICB9XG5cbiAgICAvKirliJvlu7rml7bmoLnmja5qc29u5pWw5o2u6K6+572u5paw5Zyw5p2/55qE5pa55ZCR5bGe5oCnICovXG4gICAgcHJpdmF0ZSBTZXROZXdGbG9vclR5cGVEYXRhKGZsb29yTm9kZTogTm9kZSwganNvbjogYW55LCBpOiBudW1iZXIpOiBGbG9vclR5cGUge1xuICAgICAgICBsZXQgZmxvb3IgPSBmbG9vck5vZGUuZ2V0Q29tcG9uZW50KEZsb29yKSBhcyBGbG9vcjtcbiAgICAgICAgaWYgKGZsb29yKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGpzb24uTGV2ZWwxLmZsb29yRGlyZWN0aW9uRGF0YVtpXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJzEnOlxuICAgICAgICAgICAgICAgICAgICBmbG9vci5mbG9vclR5cGUgPSBGbG9vclR5cGUuRlJPTlQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJzInOlxuICAgICAgICAgICAgICAgICAgICBmbG9vci5mbG9vclR5cGUgPSBGbG9vclR5cGUuQkFDSztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnMyc6XG4gICAgICAgICAgICAgICAgICAgIGZsb29yLmZsb29yVHlwZSA9IEZsb29yVHlwZS5MRUZUO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICc0JzpcbiAgICAgICAgICAgICAgICAgICAgZmxvb3IuZmxvb3JUeXBlID0gRmxvb3JUeXBlLlJJR0hUO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLmib7kuI3liLDnsbvlnos6XCIgKyBqc29uLkxldmVsMS5mbG9vckRpcmVjdGlvbkRhdGFbaV0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmxvb3IuZmxvb3JUeXBlO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIuaJvuS4jeWIsOexu+WeizpcIiArIGpzb24uTGV2ZWwxLmZsb29yRGlyZWN0aW9uRGF0YVtpXSlcbiAgICB9XG5cbiAgICBSZW1vdmVGbG9vcigpIHtcbiAgICAgICAgdGhpcy5mbG9vclByZWZhYnMuc3BsaWNlKDAsIDEpO1xuICAgIH1cbiAgICBtb3Zlc3BlZWQ6IG51bWJlciA9IDM7XG4gICAgbW92ZVNwZWVkeDogbnVtYmVyID0gMDtcbiAgICBtb3ZlU3BlZWR6OiBudW1iZXIgPSAwO1xuICAgIG5vd0Zsb29ySW5kZXg6IG51bWJlciA9IDA7XG4gICAgY2FtZXJhQW5nbGU6IG51bWJlciA9IDA7XG5cbiAgICBvblVwRGF0ZShkdDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuTW92ZUZsb29yKGR0KTtcbiAgICB9XG5cblxuXG4gICAgTW92ZUZsb29yKGR0OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFsbEZsb29yc1t0aGlzLm5vd0Zsb29ySW5kZXhdKSByZXR1cm47XG4gICAgICAgIGlmICghdGhpcy5hbGxGbG9vcnNbdGhpcy5ub3dGbG9vckluZGV4XS5Jc05vd0Zsb29yKCkpIHtcbiAgICAgICAgICAgIHRoaXMubm93Rmxvb3JJbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIC8v6Iul5LiL5Liq57uT54K55a2Y5ZyoIOW5tuS4lOS4juW9k+WJjee7k+eCueeahOexu+Wei+S4jeWQjFxuICAgICAgICBpZiAodGhpcy5ub3dGbG9vckluZGV4ICsgMSA8IHRoaXMuYWxsRmxvb3JzLmxlbmd0aCAmJiB0aGlzLmFsbEZsb29yc1t0aGlzLm5vd0Zsb29ySW5kZXggKyAxXS5mbG9vclR5cGUgIT0gdGhpcy5hbGxGbG9vcnNbdGhpcy5ub3dGbG9vckluZGV4XS5mbG9vclR5cGUpIHtcbiAgICAgICAgICAgIC8v5bqU6K+l6L2s5ZCRXG4gICAgICAgICAgICBpZiAoVmVjMy5kaXN0YW5jZSh0aGlzLmFsbEZsb29yc1t0aGlzLm5vd0Zsb29ySW5kZXhdLm5vZGUud29ybGRQb3NpdGlvbiwgbmV3IFZlYzMoMCwgMCwgMCkpIDwgMC4xKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLmFsbEZsb29yc1t0aGlzLm5vd0Zsb29ySW5kZXggKyAxXS5mbG9vclR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBGbG9vclR5cGUuRlJPTlQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLk1vdmVGcm9udCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgRmxvb3JUeXBlLkJBQ0s6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLk1vdmVCYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBGbG9vclR5cGUuTEVGVDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuTW92ZUxlZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIEZsb29yVHlwZS5SSUdIVDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuTW92ZVJpZ2h0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuTW92ZVN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8v6L2s5pGE5YOP5aS0XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuYWxsRmxvb3JzW3RoaXMubm93Rmxvb3JJbmRleCArIDFdLmZsb29yVHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgRmxvb3JUeXBlLkZST05UOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYUFuZ2xlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBGbG9vclR5cGUuQkFDSzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW1lcmFBbmdsZSA9IDE4MDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBGbG9vclR5cGUuTEVGVDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW1lcmFBbmdsZSA9IDkwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEZsb29yVHlwZS5SSUdIVDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW1lcmFBbmdsZSA9IC05MDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgb3V0ID0gbmV3IFZlYzMoMCwgMCwgMCk7XG4gICAgICAgIGxldCBhbmdsZSA9IG5ldyBWZWMzKDAsIDAsIDApO1xuICAgICAgICB0aGlzLkNhbWVyYT8uZ2V0V29ybGRSb3RhdGlvbigpLmdldEV1bGVyQW5nbGVzKGFuZ2xlKVxuICAgICAgICBjb25zb2xlLmxvZyhhbmdsZSk7XG4gICAgICAgIFZlYzMubGVycChvdXQsIGFuZ2xlLCBuZXcgVmVjMygwLCB0aGlzLmNhbWVyYUFuZ2xlLCAwKSwgMC4xKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYW5nbGUpO1xuXG4gICAgICAgIHRoaXMuQ2FtZXJhPy5zZXRSb3RhdGlvbkZyb21FdWxlcihvdXQueCwgb3V0LnksIG91dC56KTtcbiAgICAgICAgdGhpcy5QbGF5ZXI/LnNldFJvdGF0aW9uRnJvbUV1bGVyKG91dC54LCBvdXQueSwgb3V0LnopO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYWxsRmxvb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5hbGxGbG9vcnNbaV07XG4gICAgICAgICAgICBlbGVtZW50Lm5vZGUuc2V0V29ybGRQb3NpdGlvbihlbGVtZW50Lm5vZGUud29ybGRQb3NpdGlvbi54ICsgKHRoaXMubW92ZVNwZWVkeCAqIHRoaXMubW92ZXNwZWVkICogZHQpLCAwLCBlbGVtZW50Lm5vZGUud29ybGRQb3NpdGlvbi56ICsgKHRoaXMubW92ZVNwZWVkeiAqIHRoaXMubW92ZXNwZWVkICogZHQpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIE1vdmVGcm9udCgpIHtcbiAgICAgICAgdGhpcy5tb3ZlU3BlZWR4ID0gMDtcbiAgICAgICAgdGhpcy5tb3ZlU3BlZWR6ID0gMTtcbiAgICB9XG4gICAgTW92ZUJhY2soKSB7XG4gICAgICAgIHRoaXMubW92ZVNwZWVkeCA9IDA7XG4gICAgICAgIHRoaXMubW92ZVNwZWVkeiA9IC0xO1xuICAgIH1cbiAgICBNb3ZlTGVmdCgpIHtcbiAgICAgICAgdGhpcy5tb3ZlU3BlZWR4ID0gMTtcbiAgICAgICAgdGhpcy5tb3ZlU3BlZWR6ID0gMDtcbiAgICB9XG4gICAgTW92ZVJpZ2h0KCkge1xuICAgICAgICB0aGlzLm1vdmVTcGVlZHggPSAtMTtcbiAgICAgICAgdGhpcy5tb3ZlU3BlZWR6ID0gMDtcbiAgICB9XG4gICAgTW92ZVN0b3AoKSB7XG4gICAgICAgIHRoaXMubW92ZVNwZWVkeCA9IDA7XG4gICAgICAgIHRoaXMubW92ZVNwZWVkeiA9IDA7XG4gICAgfVxufSJdfQ==